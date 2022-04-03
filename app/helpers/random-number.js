import appData from "./data.js";

export function RandomNumber(form) {
  const $form = document.querySelector(form);
  let max = Number($form["max-number"].value),
    min = Number($form["min-number"].value),
    result = Math.floor(Math.random() * (max - min)) + min;

  appData.result = `Un numero aleatorio entre ${min} y ${max} es: ${result}`;
}
