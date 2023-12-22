import { ErrorSubTitle, ErrorTitle, ErrorWrap } from "./ErrorPage-styled";

export const ErrorPage = () => {
  return (
    <ErrorWrap>
      <ErrorTitle>Error 404</ErrorTitle>
      <ErrorSubTitle>Wrong path. Nothing exists for your request</ErrorSubTitle>
    </ErrorWrap>
  );
};
