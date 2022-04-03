import appData from "./data.js";
export function EmailValid(form) {
  const $form = document.querySelector(form);

  if (
    /^([a-zA-Z0-9_\.])+\@([a-zA-Z0-9\.])+(\.)+([a-zA-Z0-9]{2,4})+$/.test(
      $form.email.value
    )
  ) {
    appData.valid = true;
    appData.result = `La direccion de email "${$form.email.value}" es correcta.`;
  } else {
    appData.valid = false;
    appData.result = `La direccion de email "${$form.email.value}" NO es correcta`;
  }
}
