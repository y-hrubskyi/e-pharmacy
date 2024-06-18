import { LoginForm } from "#components/LoginForm/LoginForm";

import * as SC from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <SC.Container>
      <SC.Logo to="/" aria-label="e-pharmacy logo">
        <SC.LogoIcon />
        <SC.LogoText>E-Pharmacy</SC.LogoText>
      </SC.Logo>
      <SC.ContentWrapper>
        <SC.Heading>
          Your medication, delivered. Say goodbye to all{" "}
          <SC.AccentText>your healthcare</SC.AccentText> worries with us
        </SC.Heading>
        <LoginForm />
      </SC.ContentWrapper>
      <SC.DecorElements />
    </SC.Container>
  );
};

export default LoginPage;
