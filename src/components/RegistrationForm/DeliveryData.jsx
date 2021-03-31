import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DeliveryData({ whenSending }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        whenSending({ cep, address, number, state, city });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        placeholder="00000-000"
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />
      <TextField
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <TextField
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <TextField
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <TextField
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DeliveryData;
