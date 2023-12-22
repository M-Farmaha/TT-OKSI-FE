import { ButtonComponent } from "./Button-styled";

export const Button = ({ children, disabled, type, style }) => {
  return (
    <>
      <ButtonComponent style={style} disabled={disabled} type={type}>{children}</ButtonComponent>
    </>
  );
};
