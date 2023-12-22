import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;

  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.38;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  background: linear-gradient(140.37deg,#0049b8 17.28%,#70e3e1 94.89%);
  box-shadow: 0 4px 10px rgba(0,0,0,.25);
  border-radius: 5px;
  border: none;

  transition: var(--main-transition);

  &:hover,
  &:focus {
    background: linear-gradient(140.37deg,#70e3e1 17.28%,#0049b8 94.89%);
    cursor: pointer;
    outline: none;

    box-shadow: 0 4px 10px var(--border-input-style);
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: linear-gradient(140.37deg,#0049b8 17.28%,#70e3e1 94.89%);
  }
`;