import { ButtonComponent, LogoutButtonComponent } from "./Button-styled";

export const Button = ({ children, disabled, type, style, onClick }) => {
  return (
    <>
      <ButtonComponent
        onClick={onClick}
        style={style}
        disabled={disabled}
        type={type}
      >
        {children}
      </ButtonComponent>
    </>
  );
};

export const LogoutButton = ({ children, disabled, type, style, onClick }) => {
  return (
    <>
      <LogoutButtonComponent
        onClick={onClick}
        style={style}
        disabled={disabled}
        type={type}
      >
        {children}
      </LogoutButtonComponent>
    </>
  );
};
