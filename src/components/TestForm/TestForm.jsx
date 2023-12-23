import { Button } from "components/Button/Button";
import {
  FormContainer,
  QuestionTitle,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./TestForm-styled";
import { useState } from "react";
import { getProgress, getToken } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useGetTestByOrderQuery } from "redux/testsApi";
import { setProgress } from "redux/slice";

export const TestForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const progress = useSelector(getProgress);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const { data } = useGetTestByOrderQuery({ token, progress });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClick = () => {
    setisLoading(true);
    try {
      dispatch(setProgress(progress + 1));
    } catch (error) {
      alert(error);
    }
    setisLoading(false);
  };

  return (
    data && (
      <>
        <QuestionTitle>
          {data.order}. {data.text}
        </QuestionTitle>

        <FormContainer>
          {data.options.map((option, index) => (
            <RadioContainer key={index}>
              <RadioInput
                type="radio"
                id={index}
                name="options"
                value={option}
                onChange={handleOptionChange}
              />
              <RadioLabel htmlFor={index}>{option}</RadioLabel>
            </RadioContainer>
          ))}

          <Button
            onClick={handleButtonClick}
            type="button"
            disabled={!selectedOption}
          >
            Next
          </Button>
        </FormContainer>
      </>
    )
  );
};
