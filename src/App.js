import React from "react";
import { Container, Typography } from "@material-ui/core";

import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { validateCPF, validatePassword, validateName } from "./models/registration";

import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <RegistrationForm
        whenSending={whenSendingForm}
        validate={{ cpf: validateCPF, password: validatePassword, name: validateName }}
      />
    </Container>
  );
}

function whenSendingForm(data) {
  console.log(data);
}

export default App;
