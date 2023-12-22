import { Button } from "components/Button/Button";
import {
  FormContainer,
  QuestionTitle,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./TestForm-styled";
import { useState } from "react";

export const TestForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <QuestionTitle>1/60. We ... American.</QuestionTitle>

      <FormContainer>
        <RadioContainer>
          <RadioInput
            type="radio"
            id="a"
            name="options"
            value="a"
            onChange={handleOptionChange}
          />
          <RadioLabel htmlFor="a">not</RadioLabel>
        </RadioContainer>

        <RadioContainer>
          <RadioInput
            type="radio"
            id="b"
            name="options"
            value="b"
            onChange={handleOptionChange}
          />
          <RadioLabel htmlFor="b">not are</RadioLabel>
        </RadioContainer>

        <RadioContainer>
          <RadioInput
            type="radio"
            id="c"
            name="options"
            value="c"
            onChange={handleOptionChange}
          />
          <RadioLabel htmlFor="c">aren't</RadioLabel>
        </RadioContainer>

        <RadioContainer>
          <RadioInput
            type="radio"
            id="d"
            name="options"
            value="d"
            onChange={handleOptionChange}
          />
          <RadioLabel htmlFor="d">isn't</RadioLabel>
        </RadioContainer>

        <Button type="button" disabled={!selectedOption}>
          Next
        </Button>
      </FormContainer>
    </>
  );
};
