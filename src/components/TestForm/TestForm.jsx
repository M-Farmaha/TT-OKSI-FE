import { Button } from "components/Button/Button";
import {
  FormContainer,
  QuestionTitle,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./TestForm-styled";
import { useState } from "react";
import { getToken } from "redux/selectors";
import { useSelector } from "react-redux";
import {
  useUpdateUserProgressMutation,
  useUpdateUserCorrectAnswersMutation,
  useUpdateTestStatusMutation,
} from "redux/Api";
import { ButtonLoader } from "components/Loaders/Loaders";

export const TestForm = ({ test, setTest, isLastQuestion, user }) => {
  const { order, text, options } = test;
  const { progress, correct } = user;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector(getToken);

  const [updateUserProgress] = useUpdateUserProgressMutation();
  const [updateUserCorrectAnswers] = useUpdateUserCorrectAnswersMutation();
  const [updateStatus] = useUpdateTestStatusMutation();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      if (selectedOption === test.answer) {
        await updateUserCorrectAnswers({
          token,
          body: { correct: correct + 1 },
        });
      }
      if (isLastQuestion) {
        await updateStatus({
          token,
          body: { status: true },
        });
      } else {
        await updateUserProgress({
          token,
          body: { progress: progress + 1 },
        });
      }
    } catch (error) {
      alert(error);
    }
    setSelectedOption(null);
    setTest(null);
    setIsLoading(false);
  };

  return (
    <>
      <QuestionTitle>
        {order}. {text}
      </QuestionTitle>

      <FormContainer>
        {options?.map((option, index) => (
          <RadioContainer key={index}>
            <RadioInput
              type="radio"
              id={index}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              disabled={isLoading}
            />
            <RadioLabel htmlFor={index}>{option}</RadioLabel>
          </RadioContainer>
        ))}

        <Button
          onClick={handleButtonClick}
          type="button"
          disabled={isLoading || !selectedOption}
        >
          {!isLoading ? (
            isLastQuestion ? (
              "Finish test"
            ) : (
              "Next"
            )
          ) : (
            <ButtonLoader />
          )}
        </Button>
      </FormContainer>
    </>
  );
};
