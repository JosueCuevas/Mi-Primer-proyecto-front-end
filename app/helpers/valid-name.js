import appData from "./data.js";

export function ValidName(form) {
  const $form = document.querySelector(form);

  let regExp = /^[a-z,á,é,í,ó,ú,ü,ñ\s]+$/gi.test($form.text.value);

  regExp
    ? (appData.result = `"${$form.text.value}" Nombre válido`)
    : (appData.result = `"${$form.text.value}" Nombre inválido`);
}
