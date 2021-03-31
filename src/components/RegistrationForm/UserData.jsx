import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import RegistrationValidations from "../../contexts/RegistrationValidations";
import useError from "../../hooks/useError";

function UserData({ whenSending }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validate = useContext(RegistrationValidations);
  const [error, validateFields, validateSubmission] = useError(validate);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (validateSubmission()) {
          whenSending({ email, password });
        }
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        name="password"
        id="password"
        error={!error.password.valid}
        helperText={error.password.text}
        label="password"
        required
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validateFields}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default UserData;
