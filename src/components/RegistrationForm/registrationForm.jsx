import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function RegistrationForm() {
  return (
    <form>
      <TextField
        id="name"
        variant="outlined"
        label="Nome"
        margin="normal"
        fullWidth
      />
      <TextField
        id="last-name"
        variant="outlined"
        label="Sobrenome"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        variant="outlined"
        placeholder="000.000.000-00"
        label="CPF"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="sales" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="newsletter" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegistrationForm;
