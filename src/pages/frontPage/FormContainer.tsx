import React from "react";
import Logo from "../../assets/svgComponents/Logo";
import { theme } from "../../theme";
import { ForgotPasswordForm } from "../../components/forms/ForgotPasswordForm";
import { SignInForm } from "../../components/forms/SignInForm";
import { SignUpForm } from "../../components/forms/SignUpForm";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import styled from "styled-components";


export enum forms {
  SignIn,
  SignUp,
  ForgotPassword,
}

const formMap = {
  [forms.SignIn]: <SignInForm />,
  [forms.SignUp]: <SignUpForm />,
  [forms.ForgotPassword]: <ForgotPasswordForm />,
};

const containerPadding = 50;

const Container = styled.div`
  padding: ${containerPadding}px;
  height: calc(100% - ${containerPadding * 2}px);

  @media (max-width: 1200px) {
    padding: 0; // Remove padding for smaller screens
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 10px;
`;

const InnerContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: ${theme.utils.borderRadius};
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
`;

export default function FormContainer({ form }: { form: forms }) {
  return (
    <Container>
      {/* The height of the logo is 110px ish */}
      <LogoContainer>
        <Link to="/">
          <Logo color={theme.colors.primary} />
        </Link>
      </LogoContainer>
      <InnerContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <FormWrapper>{formMap[form]}</FormWrapper>
        </div>
      </InnerContainer>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 10000,
          style: {
            borderRadius: theme.utils.borderRadius
          },
        }}
      />
    </Container>
  );
}

