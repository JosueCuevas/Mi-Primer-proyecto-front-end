import appData from "./data.js";
export function Factorial(form) {
  const $form = document.querySelector(form);
  if ($form.number.value < 1) {
    appData.valid = false;
    return (appData.result = "El numero NO puede ser negativo ni Cero");
  } else {
    appData.valid = true;
    let resultado = 1;
    for (let i = 1; i < $form.number.value; i++) {
      resultado += resultado * i;
    }
    appData.result = `El factorial del numero ${$form.number.value} es: ${resultado}`;
  }
}
