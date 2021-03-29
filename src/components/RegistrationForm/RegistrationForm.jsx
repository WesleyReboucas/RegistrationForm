import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
        console.log(lastName);
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          let timeName = event.target.value;
          if (timeName.length >= 3) {
            timeName = timeName.substr(0, 3);
          }
          setName(timeName);
        }}
        id="name"
        variant="outlined"
        label="Nome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
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
