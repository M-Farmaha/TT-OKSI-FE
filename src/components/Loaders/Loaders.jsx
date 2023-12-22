import { RotatingLines } from "react-loader-spinner";
import { PageLoaderWrapper } from "./Loaders-styled";

export const ButtonLoader = () => {
  return (
    <RotatingLines
      strokeColor="var(--primary-black-color)"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const ImageLoader = () => {
  return (
    <RotatingLines
      strokeColor="var(--accent-color)"
      strokeWidth="5"
      animationDuration="0.75"
      width="66"
      visible={true}
    />
  );
};

export const PageLoader = () => {
  return (
    <PageLoaderWrapper>
      <RotatingLines
        strokeColor="var(--accent-color)"
        strokeWidth="5"
        animationDuration="0.75"
        width="99"
        visible={true}
      />
    </PageLoaderWrapper>
  );
};
