import { Container, Typography } from "@material-ui/core";
import React from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <RegistrationForm
        whenSending={whenSendingForm}
        validateCPF={validateCPF}
      />
    </Container>
  );
}

function whenSendingForm(data) {
  console.log(data);
}

function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "O CPF deve conter 11 dígitos" };
  } else {
    return { valid: true, text: "" };
  }
}

export default App;
