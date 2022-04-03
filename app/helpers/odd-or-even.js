import appData from "./data.js";
export function OddOrEven(form) {
  const $form = document.querySelector(form);

  let result = $form.number.value % 2;

  result === 0
    ? (appData.result = `El número ${$form.number.value} es par`)
    : (appData.result = `El número ${$form.number.value} es impar`);
}
