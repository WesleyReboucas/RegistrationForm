import React from "react";

function RegistrationForm() {
  return (
    <form>
      <label> Nome </label>
      <input type="text" placeholder="Nome"></input>

      <label> Sobrenome </label>
      <input type="text" placeholder="Sobrenome"></input>

      <label> CPF </label>
      <input type="text" placeholder="000.000.000-10"></input>

      <label> Promoções </label>
      <input type="checkbox"></input>

      <label> Novidades </label>
      <input type="checkbox"></input>

      <button type="submit"> Cadastrar</button>
    </form>
  );
}

export default RegistrationForm;
