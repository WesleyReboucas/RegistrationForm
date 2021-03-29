import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function RegistrationForm({ whenSending, validateCPF }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [error, setError] = useState({ cpf: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        whenSending({ name, lastName, cpf, sales, newsletter });
      }}
    >
      <TextField
        id="name"
        variant="outlined"
        label="Nome"
        margin="normal"
        fullWidth
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="last-name"
        variant="outlined"
        label="Sobrenome"
        margin="normal"
        fullWidth
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        id="CPF"
        variant="outlined"
        placeholder="000.000.000-00"
        label="CPF"
        margin="normal"
        fullWidth
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const isValid = validateCPF(cpf);
          setError({ cpf: isValid });
        }}
        error={!error.cpf.valid}
        helperText={error.cpf.text}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="sales"
            color="primary"
            checked={sales}
            onChange={(event) => {
              setSales(event.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="newsletter"
            color="primary"
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegistrationForm;
