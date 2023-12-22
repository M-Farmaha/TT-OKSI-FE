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
  color: var(--secondary-black-color);
  font-family: Merriweather;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;

  width: 350px;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 400px) {
    width: calc(100vw - 50px)
  }
`;
