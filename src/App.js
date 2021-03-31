import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";

import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {
  validateCPF,
  validatePassword,
  validateName,
} from "./models/registration";
import RegistrationValidations from "./contexts/RegistrationValidations";

import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Box display="flex" alignItems="center" p={1} m={1} css={{ height: 890 }}>
        <Card>
          <CardContent>
            <Typography variant="h3" component="h1" align="center">
              Formulário de Cadastro
            </Typography>

            <RegistrationValidations.Provider
              value={{
                cpf: validateCPF,
                password: validatePassword,
                name: validateName,
              }}
            >
              <RegistrationForm whenSending={whenSendingForm} />
            </RegistrationValidations.Provider>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

function whenSendingForm(data) {
  console.log(data);
}

export default App;
