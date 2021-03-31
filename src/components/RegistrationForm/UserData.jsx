import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function UserData({ whenSending, validate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ password: { valid: true, text: "" } });

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...error };
    newState[name] = validate[name](value);
    setError(newState);
  }

  function validateSubmission() {
    for (let fields in error) {
      if (!error[fields].valid) {
        return false;
      }
    }
    return true;
  }

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
