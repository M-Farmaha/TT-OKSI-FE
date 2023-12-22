import styled from "styled-components";

export const QuestionTitle = styled.p`
  color: var(--primary-color);
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  color: var(--primary-black-color);

  width: 500px;
  padding-left: 20px;
  margin-bottom: 10px;

  @media (max-width: 550px) {
    width: calc(100vw - 50px);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;

  background-color: var(--primary-white-color);
  padding: 5px;

  padding: 20px;
  border: solid 1px var(--border-input-style);
  border-radius: 20px;
  outline: none;

  margin-bottom: 20px;

  @media (max-width: 550px) {
    width: calc(100vw - 50px);
  }
`;

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const RadioLabel = styled.label`
  flex-grow: 1;
  color: var(--border-input-style);

  font-family: Merriweather;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  &:hover,
  &:focus,
  &:checked {
    color: var(--primary-color);
    cursor: pointer;
    outline: none;
  }
`;

export const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  appearance: none;
  border: solid 1px var(--border-input-style);
  border-radius: 50%;
  outline: none;

  &:hover,
  &:focus,
  &:checked {
    color: var(--primary-color);
    cursor: pointer;
    outline: none;

    background: linear-gradient(140.37deg, #70e3e1 17.28%, #0049b8 94.89%);
    border: none;

    + label {
      color: var(--primary-color);
    }
  }
`;
