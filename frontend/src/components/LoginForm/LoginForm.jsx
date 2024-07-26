import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { loginSchema } from "@/config/validation/loginSchema";
import { selectAuthIsLoading } from "@/store/auth/selectors";
import { login } from "@/store/auth/operations";

import { TextField } from "@/components/common/TextField/TextField";
import { PasswordField } from "@/components/common/PasswordField/PasswordField";
import * as SC from "./LoginForm.styled";

export const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const isLoading = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const togglePasswordShown = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      const loginPromise = dispatch(login(data)).unwrap();
      await toast.promise(loginPromise, {
        loading: "Logging in...",
        success: "Login successful!",
        error: (error) => error,
      });
    } catch (error) {
      // handled in toast.promise
    }
  };

  const isCorrectEmail = dirtyFields.email && !errors.email;
  const hasErrorEmail = errors.email;
  const isCorrectPassword = dirtyFields.password && !errors.password;
  const hasErrorPassword = errors.password;

  return (
    <SC.AuthForm onSubmit={handleSubmit(onSubmit)}>
      <SC.AuthFieldsWrapper>
        <TextField
          isCorrect={isCorrectEmail}
          correctMessage="Email is correct"
          hasError={hasErrorEmail}
          errorMessage={errors.email?.message}
        >
          <SC.AuthInput
            type="email"
            {...register("email")}
            placeholder="Email address"
            data-is-correct={isCorrectEmail}
            data-has-error={hasErrorEmail}
          />
        </TextField>
        <PasswordField
          passwordShown={passwordShown}
          onTogglePasswordShown={togglePasswordShown}
          isCorrect={isCorrectPassword}
          correctMessage="Password is secure"
          hasError={hasErrorPassword}
          errorMessage={errors.password?.message}
        >
          <SC.PasswordInput
            type={passwordShown ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
            data-is-correct={isCorrectPassword}
            data-has-error={hasErrorPassword}
          />
        </PasswordField>
      </SC.AuthFieldsWrapper>

      <SC.AuthSubmitBtn type="submit" disabled={isLoading}>
        Log In
      </SC.AuthSubmitBtn>
    </SC.AuthForm>
  );
};
