import { LogoutButton } from "components/Button/Button";
import { Container, Text, Title } from "./TestPage-styled";
import { TestForm } from "components/TestForm/TestForm";
import { LogoutButtonLoader, TestLoader } from "components/Loaders/Loaders";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "redux/slice";
import { getToken } from "redux/selectors";
import {
  useGetCurrentUserQuery,
  useGetTestByOrderQuery,
  useGetTestLengthQuery,
  useLogoutUserMutation,
} from "redux/Api";
import { ResultForm } from "components/ResultForm/ResultForm";

const TestPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [progress, setProgress] = useState(1);
  const [status, setStatus] = useState(false);
  const [test, setTest] = useState(null);

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const [logoutUser] = useLogoutUserMutation();

  const { data: currentUser } = useGetCurrentUserQuery(token);
  const { data: currentTest } = useGetTestByOrderQuery({ token, progress });
  const { data: testsLength } = useGetTestLengthQuery(token);

  useEffect(() => {
    if (currentUser) {
      setStatus(currentUser.status);
      setProgress(currentUser.progress);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentTest) setTest(currentTest);
  }, [currentTest]);

  const handleLogoutClick = async () => {
    setisLoading(true);
    try {
      await logoutUser(token);
      dispatch(setToken(null));
    } catch (error) {
      alert(error);
    }
    setisLoading(false);
    setTest(null);
    setProgress(1);
  };

  return (
    <>
      <Container>
        <Text>You are logged in as "{currentUser?.nickname}"</Text>
        <LogoutButton disabled={isLoading} onClick={handleLogoutClick}>
          {!isLoading ? "Logout" : <LogoutButtonLoader />}
        </LogoutButton>
        <Title>
          {status
            ? "The test is complete! Thank you for demonstrating your level"
            : "There is no time limit for the entire test, but questions cannot be skipped or returned, so try to give the correct answer right away."}
        </Title>
        {status ? (
          <ResultForm currentUser={currentUser} />
        ) : !test ? (
          <TestLoader />
        ) : (
          <TestForm
            test={test}
            setTest={setTest}
            isLastQuestion={progress === testsLength}
            user={currentUser}
          />
        )}
      </Container>
    </>
  );
};

export default TestPage;
