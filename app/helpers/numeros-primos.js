import appData from "./data.js";
export function NumeroPrimo(form) {
  const $form = document.querySelector(form);
  let contador = 1;

  if ($form.number.value < 1) {
    appData.valid = false;
    return (appData.result = "El numero no puede ser negativo ni cero");
  } else {
    appData.valid = true;
  }

  for (let i = 1; i < $form.number.value; i++) {
    let residuo = $form.number.value % i;
    if (residuo === 0) {
      contador++;
    }
  }
  contador > 2
    ? (appData.result = `El numero ${$form.number.value} NO es primo`)
    : (appData.result = `El numero ${$form.number.value} es primo`);
}
