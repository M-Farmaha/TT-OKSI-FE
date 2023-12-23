import { Button } from "components/Button/Button";
import {
  FormContainer,
  QuestionTitle,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./TestForm-styled";
import { useEffect, useState } from "react";
import { getToken } from "redux/selectors";
import { useSelector } from "react-redux";
import {
  useUpdateUserProgressMutation,
  useGetTestByOrderQuery,
  useGetCurrentUserQuery,
} from "redux/Api";
import { ButtonLoader, TestLoader } from "components/Loaders/Loaders";

export const TestForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(1);
  const [test, setTest] = useState(null);

  const token = useSelector(getToken);

  const { data: currentUser } = useGetCurrentUserQuery(token);
  const { data: currentTest } = useGetTestByOrderQuery({ token, progress });
  const [updateUserProgress] = useUpdateUserProgressMutation();

  useEffect(() => {
    if (currentUser) setProgress(currentUser.progress);
  }, [currentUser]);

  useEffect(() => {
    if (currentTest) setTest(currentTest);
  }, [currentTest]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      await updateUserProgress(token);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
    setTest(null);
  };

  return !test ? (
    <TestLoader />
  ) : (
    <>
      <QuestionTitle>
        {currentTest.order}. {currentTest.text}
      </QuestionTitle>

      <FormContainer>
        {currentTest.options.map((option, index) => (
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
          {!isLoading ? "Next" : <ButtonLoader />}
        </Button>
      </FormContainer>
    </>
  );
};
