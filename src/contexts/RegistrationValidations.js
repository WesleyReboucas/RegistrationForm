import React from "react";

const RegistrationValidations = React.createContext({
  cpf: withoutValidation,
  password: withoutValidation,
  name: withoutValidation,
});

function withoutValidation(data) {
  console.log(data);
  return { valid: true, text: "" };
}

export default RegistrationValidations;
