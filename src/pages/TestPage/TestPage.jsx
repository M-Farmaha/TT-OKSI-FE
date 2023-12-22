import { LoginForm } from "components/LoginForm/LoginForm";
import { Container, Title } from "./TestPage-styled";
import { TestForm } from "components/TestForm/TestForm";

const TestPage = () => {
  return (
    <>
      <Container>
        <Title>
          There is no time limit for the entire test, but questions cannot be
          skipped or returned, so try to give the correct answer right away.
        </Title>
        <TestForm />
      </Container>
    </>
  );
};

export default TestPage;
