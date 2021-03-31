import React, { useState, useContext } from "react";

import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import RegistrationValidations from "../../contexts/RegistrationValidations";
import useError from "../../hooks/useError";

function PersonalData({ whenSending }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const validate = useContext(RegistrationValidations);
  const [error, validateFields, validateSubmission] = useError(validate);



  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (validateSubmission()) {
          whenSending({ name, lastName, cpf, sales, newsletter });
        }
      }}
    >
      <TextField
        name="name"
        id="name"
        variant="outlined"
        label="Nome"
        margin="normal"
        fullWidth
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateFields}
        error={!error.name.valid}
        helperText={error.name.text}
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
        name="cpf"
        variant="outlined"
        placeholder="000.000.000-00"
        label="CPF"
        margin="normal"
        fullWidth
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validateFields}
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
        Próximo
      </Button>
    </form>
  );
}

export default PersonalData;
