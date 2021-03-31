function validateCPF(cpf) {
  if (cpf.length === 11) {
    let validateFirstDigit = 0;
    let validateSecondDigit = 0;

    // ------------------------------------ VALIDATE 01
    for (let n = 0; n < 9; n++) {
      const element = cpf[n];
      let aux = 10;
      let validate1 = element * (aux - n);
      validateFirstDigit = validateFirstDigit + validate1;
    }
    validateFirstDigit = (validateFirstDigit * 10) % 11;
    validateFirstDigit = validateFirstDigit === 10 ? 0 : validateFirstDigit;

    // ------------------------------------ VALIDATE 02
    for (let n = 0; n < 10; n++) {
      const element = cpf[n];
      let aux = 11;
      let validate1 = element * (aux - n);
      validateSecondDigit = validateSecondDigit + validate1;
    }
    validateSecondDigit = (validateSecondDigit * 10) % 11;
    validateSecondDigit = validateSecondDigit === 10 ? 0 : validateSecondDigit;

    // ------------------------------------ RESULT
    // It's necessary use "==", because the operator "===" compare type and value
    if (validateFirstDigit == cpf[9] && validateSecondDigit == cpf[10]) {
      return { valid: true, text: "" };
    } else {
      return { valid: false, text: "O CPF está incorreto." };
    }
  } else {
    return { valid: false, text: "O CPF deve conter 11 dígitos" };
  }
}

function validatePassword(password) {
  if (password.length < 8 || password.length > 72) {
    return { valid: false, text: "Senha deve conter no mínimo 8 caracteres." };
  } else {
    return { valid: true, text: "" };
  }
}

function validateName(name) {
  if (name.length < 3 || name.length > 30) {
    return { valid: false, text: "Nome deve conter no mínimo 3 caracteres." };
  } else {
    return { valid: true, text: "" };
  }
}

export { validateCPF, validatePassword, validateName };
