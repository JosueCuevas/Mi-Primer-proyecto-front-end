import appData from "./data.js";

export function InvertString(form) {
  const $form = document.querySelector(form);

  let $text = $form.text.value;

  let invert = $text.split("").reverse().join("");

  appData.result = `El texto "${$text}", invertido es:  <br>"${invert}"`;
}
