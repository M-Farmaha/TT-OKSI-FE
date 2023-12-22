import styled from "styled-components";

export const ErrorWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ErrorTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  color: var(--primary-color);
  margin-bottom: 10px;
`;

export const ErrorSubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: var(--primary-black-color);
`;
