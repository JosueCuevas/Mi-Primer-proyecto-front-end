import appData from "./data.js";

export function TemperatureConverter(form) {
  const $form = document.querySelector(form);
  let temperature;
  if ($form.scale.value === "C") {
    temperature = ($form.number.value - 32) * (5 / 9);
    appData.result = `${
      $form.number.value
    } °F es equivalente a ${temperature.toFixed(2)} °C`;
  } else {
    temperature = $form.number.value * (9 / 5) + 32;
    appData.result = `${
      $form.number.value
    } °C es equivalente a ${temperature.toFixed(2)} °F`;
  }
}
