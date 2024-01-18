import { useState } from "react";

import {
  Form,
  Label,
  Input,
  SecureButton,
  HidePasswordIcon,
  ShowPasswordIcon,
  WarningText,
} from "./LoginForm-styled";
import { ButtonLoader } from "../Loaders/Loaders";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/Api";
import { setToken } from "../../redux/slice";
import { Button } from "components/Button/Button";

export const LoginForm = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const { token } = await loginUser({
        nickname,
        password,
      }).unwrap();
      dispatch(setToken(token));
    } catch (error) {
      alert(error?.data?.message);
    }
    setisLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={"nickname"}>Nickname</Label>
      <Input
        style={{ marginBottom: "20px" }}
        type="nickname"
        name="nickname"
        placeholder="Enter your nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        id={"nickname"}
        required
        autoComplete="off"
      />

      <Label htmlFor={"password"}>Password</Label>

      <div style={{ position: "relative" }}>
        <Input
          style={{ marginBottom: "50px", paddingRight: "50px" }}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id={"password"}
          title="Min 4, max 20 latin letters and figures"
          pattern="^[a-zA-Z0-9]{4,20}$"
          required
          autoComplete="off"
        />
        <SecureButton
          style={{ position: "absolute", top: 0, right: 0 }}
          type="button"
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
        </SecureButton>
      </div>

      <Button type="submit" disabled={isLoading || !nickname || !password}>
        {!isLoading ? "Start the test" : <ButtonLoader />}
      </Button>

      {isLoading && (
        <WarningText>
          The first load may take more time according to server's cold start.
          Please wait a little...
        </WarningText>
      )}
    </Form>
  );
};
