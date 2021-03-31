import { useState } from "react";

function useError(validate) {
  const initialState = createInitialState(validate);
  const [error, setError] = useState(initialState);

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

  return [error, validateFields, validateSubmission];
}

function createInitialState(validate) {
  const initialState = {};
  for (let field in validate) {
    initialState[field] = { valid: true, text: "" };
  }
  return initialState;
}

export default useError;
