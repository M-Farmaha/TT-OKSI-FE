import { Button } from "components/Button/Button";
import { FormContainer, Text, Title } from "./ResultForn-styled";
import {
  useUpdateTestStatusMutation,
  useUpdateUserCorrectAnswersMutation,
  useUpdateUserProgressMutation,
} from "redux/Api";
import { useState } from "react";
import { getToken } from "redux/selectors";
import { useSelector } from "react-redux";
import { ButtonLoader } from "components/Loaders/Loaders";

export const ResultForm = ({ currentUser }) => {
  const { progress, correct } = currentUser;
  const percentage = Math.round((correct / progress) * 100);

  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector(getToken);

  const [updateUserProgress] = useUpdateUserProgressMutation();
  const [updateUserCorrectAnswers] = useUpdateUserCorrectAnswersMutation();
  const [updateStatus] = useUpdateTestStatusMutation();

  let level;
  let levelDescription;

  switch (true) {
    case percentage >= 0 && percentage <= 20:
      level = "Beginner";
      levelDescription =
        "You're just starting out on your language learning journey.";
      break;
    case percentage > 20 && percentage <= 40:
      level = "Pre-Intermediate";
      levelDescription =
        "You have some basic understanding but still in the early stages.";
      break;
    case percentage > 40 && percentage <= 60:
      level = "Intermediate";
      levelDescription =
        "You have a solid foundation and can handle more complex concepts.";
      break;
    case percentage > 60 && percentage <= 80:
      level = "Upper-Intermediate";
      levelDescription =
        "You're well-versed and can navigate through intermediate to advanced topics.";
      break;
    case percentage > 80 && percentage <= 100:
      level = "Advanced";
      levelDescription =
        "Congratulations! You've mastered the language at an advanced level.";
      break;
    default:
      level = "Unknown";
      levelDescription = "We couldn't determine your level at this time.";
  }

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      await Promise.all([
        updateStatus({
          token,
          body: { status: false },
        }),
        updateUserProgress({
          token,
          body: { progress: 1 },
        }),
        updateUserCorrectAnswers({
          token,
          body: { correct: 0 },
        }),
      ]);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormContainer>
        <Title>Your level: {level}</Title>

        <Text>
          Your result: {correct}/{progress} correct answers, or {percentage}%
        </Text>

        <Text>{levelDescription}</Text>
      </FormContainer>

      <Button
        type="button"
        onClick={handleButtonClick}
        style={{ width: "100px" }}
        disabled={isLoading}
      >
        {!isLoading ? "Try again" : <ButtonLoader />}
      </Button>
    </>
  );
};
