import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Container, Title } from "./AuthPage-styled";

const AuthPage = () => {
  return (
    <>
      <Container>
        <Title>Check your English level with 30 questions</Title>
        <LoginForm />
      </Container>
    </>
  );
};

export default AuthPage;
