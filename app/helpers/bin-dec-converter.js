import appData from "./data.js";
export function Converter(form) {
  const $form = document.querySelector(form);

  if ($form.number.value < 0) {
    appData.valid = false;
    return (appData.result = `Por el momento esta función no acepta numeros negativos`);
  } else {
    appData.valid = true;
  }

  let number = parseInt($form.number.value),
    base = parseInt($form.base.value);
  if ($form.base.value === "10") {
    const array = [];
    while (number > 0) {
      array.push(number % 2);
      number = Math.floor(number / 2);
    }

    appData.result = `El numero decimal ${
      $form.number.value
    } en binario es ${array.reverse().join(``)} `;
  } else {
    if (/[2-9]/.test($form.number.value)) {
      appData.valid = false;
      return (appData.result =
        "El numero ingresado NO es binario, selecciona la casilla 10");
    }
    appData.result = ` El número ${$form.number.value} Binario = ${parseInt(
      number,
      base
    )} Decimal`;
    console.log(appData.result);
    // console.log(false);
  }
}
