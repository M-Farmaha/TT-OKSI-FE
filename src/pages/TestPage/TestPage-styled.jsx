import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: calc(100vh - 50px);

  background-color: var(--secondary-white-color);
`;

export const Title = styled.h1`
  color: var(--primary-color);
  font-family: Merriweather;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  width: 500px;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 550px) {
    width: calc(100vw - 50px);
  }
`;

export const Text = styled.p`
  color: var(--border-input-style);
  font-family: Merriweather;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  width: 500px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 550px) {
    width: calc(100vw - 50px);
  }
`;
