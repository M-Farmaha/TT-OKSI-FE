import { LogoutButton } from "components/Button/Button";
import { Container, Title } from "./TestPage-styled";
import { TestForm } from "components/TestForm/TestForm";
import { LogoutButtonLoader } from "components/Loaders/Loaders";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProgress, setToken } from "redux/slice";
import { getToken } from "redux/selectors";
import { useLogoutUserMutation } from "redux/authApi";

const TestPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogoutClick = async () => {
    setisLoading(true);
    try {
      await logoutUser(token);
      dispatch(setProgress(null));
      dispatch(setToken(null));
    } catch (error) {
      alert(error);
    }
    setisLoading(false);
  };

  return (
    <>
      <Container>
        <LogoutButton disabled={isLoading} onClick={handleLogoutClick}>
          {!isLoading ? "Logout" : <LogoutButtonLoader />}
        </LogoutButton>
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
