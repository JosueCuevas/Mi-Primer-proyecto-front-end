import appData from "./data.js";
export function Cutter(form) {
  const $form = document.querySelector(form);
  let result = $form["cut-text"].value,
    cutLimit = Number($form["cut-limit"].value),
    limit = result.length - cutLimit;
  console.log(cutLimit, result.length);

  if (cutLimit > result.length) {
    appData.valid = false;
    return (appData.result = `Error: no puedes poner un número mayor al número de caracteres de la palabra "${result}"`);
  }
  appData.valid = true;

  if (cutLimit === result.length) {
    return (appData.result = `De la cadena de texto "${result}" se han extraído los primeros ${cutLimit} caracteres, por lo que ahora dice: <br>"${result}"`);
  }
  appData.result = `De la cadena de texto "${result}" se han extraído los primeros ${cutLimit} caracteres, por lo que ahora dice: <br>"${result.slice(
    0,
    -limit
  )}"`;
}
