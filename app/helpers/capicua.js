import appData from "./data.js";
export function Capicua(form) {
  const $form = document.querySelector(form);

  let newNumber = $form.capicua.value.split("").reverse().join("");

  newNumber === $form.capicua.value
    ? (appData.result = `El numero ${newNumber} es capicúa`)
    : (appData.result = `El numero ${$form.capicua.value} NO es capicúa`);
}
