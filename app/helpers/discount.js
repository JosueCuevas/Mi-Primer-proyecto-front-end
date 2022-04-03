import appData from "./data.js";
export function Offer(form) {
  const $form = document.querySelector(form);
  let price = $form.number.value,
    discount = parseInt($form.percent.value);

  console.log(discount);
  if (price < 0) {
    appData.valid = false;
    return (appData.result = "Error: El monto no puede ser negativo");
  }

  if (discount > 100 || discount < 0) {
    appData.valid = false;
    return (appData.result =
      "Error: el procentaje no puede ser mayor al 100% o un número negativo");
  } else {
    appData.valid = true;
    appData.result = `El monto inicial es de $${price} pero se le aplica un ${discount}% de descuento, <br>por lo que el monto final es: <br>$${
      price - price * (discount / 100)
    }`;
  }
}
