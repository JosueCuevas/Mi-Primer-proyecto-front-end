import appData from "./data.js";
export function Counter(form) {
  const d = document,
    $form = d.querySelector(form),
    $text = $form.text.value;

  console.log($text);

  appData.result = `El texto "${$text}" tiene ${$text.length} caracteres`;
}
