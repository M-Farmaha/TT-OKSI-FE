import styled from "styled-components";

export const FormContainer = styled.div`
  margin-bottom: 20px;
  word-break: break-word;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;

  background-color: var(--primary-white-color);
  padding: 5px;

  padding: 20px;
  border: solid 1px var(--border-input-style);
  border-radius: 20px;
  outline: none;

  @media (max-width: 550px) {
    width: calc(100vw - 50px);
  }
`;

export const Title = styled.p`
  color: var(--border-input-style);
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;

  width: 100%;
  text-align: center;
`;

export const Text = styled.p`
  color: var(--primary-black-color);
  font-family: Merriweather;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  width: 100%;
  text-align: center;
`;
