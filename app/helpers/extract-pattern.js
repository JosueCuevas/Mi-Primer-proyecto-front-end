import appData from "./data.js";
export function DeletePatternString(form) {
  const $form = document.querySelector(form);

  let text = $form.text.value.toLowerCase(),
    pattern = $form.pattern.value.toLowerCase();

  if (text.includes(pattern)) {
    let newText = text.split(pattern).join("");
    appData.result = `Se ha retirado el patrón "${$form.pattern.value}" del texto: ${$form.text.value} ahora el nuevo texto es: ${newText}`;
  } else {
    appData.result = `El patrón "${$form.pattern.value}" NO existe dentro del texto "${$form.text.value}"`;
  }
}
