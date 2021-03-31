function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "O CPF deve conter 11 dígitos" };
  } else {
    return { valid: true, text: "" };
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
