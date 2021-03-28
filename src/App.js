import { Container, Typography } from "@material-ui/core";
import React from "react";
import RegistrationForm from "./components/RegistrationForm/registrationForm";

import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <RegistrationForm />
    </Container>
  );
}

export default App;
