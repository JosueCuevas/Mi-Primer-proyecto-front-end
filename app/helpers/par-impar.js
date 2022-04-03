import appData from "./data.js";

export function ParImpar() {
  const arreglo = appData.arreglo;
  if (arreglo.length === 0) {
    appData.valid = false;

    return (appData.result = "El arreglo no puede estar vacío");
  } else appData.valid = true;

  const pares = arreglo.filter((numero) => numero % 2 === 0),
    impares = arreglo.filter((numero) => numero % 2 === 1 || numero % 2 === -1);

  appData.result = `Los números pares son: ${pares.join(
    ", "
  )} <br> Los números impares son: ${impares.join(", ")}`;
}
