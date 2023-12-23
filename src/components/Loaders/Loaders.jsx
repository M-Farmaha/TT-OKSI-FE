import { RotatingLines } from "react-loader-spinner";
import { PageLoaderWrapper } from "./Loaders-styled";

export const ButtonLoader = () => {
  return (
    <RotatingLines
      strokeColor="var(--primary-white-color)"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const LogoutButtonLoader = () => {
  return (
    <RotatingLines
      strokeColor="var(--border-input-style)"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const PageLoader = () => {
  return (
    <PageLoaderWrapper>
      <RotatingLines
        strokeColor="var(--primary-color)"
        strokeWidth="5"
        animationDuration="0.75"
        width="75"
        visible={true}
      />
    </PageLoaderWrapper>
  );
};

export const TestLoader = () => {
  return (
    <RotatingLines
      strokeColor="var(--primary-color)"
      strokeWidth="5"
      animationDuration="0.75"
      width="75"
      visible={true}
    />
  );
};
