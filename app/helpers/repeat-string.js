import appData from "./data.js";
export function RepeatString(form) {
  const $form = document.querySelector(form);
  let word = $form.text.value + ", ",
    times = $form.repeat.value;

  appData.result = `El texto: "${
    $form.text.value
  }" se repetirá ${times} veces: <br> "${word.repeat(times)}"`;
}
