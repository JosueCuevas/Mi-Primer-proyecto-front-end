import appData from "./data.js";

export function Power2() {
  const nuevoArreglo = [],
    arreglo = appData.arreglo;

  if (arreglo.length === 0) {
    appData.valid = false;

    return (appData.result = "El arreglo no puede estar vacío");
  } else appData.valid = true;

  arreglo.forEach((el) => {
    nuevoArreglo.push(Math.pow(el, 2));
  });

  appData.result = `Los numeros ${arreglo.join(
    ", "
  )} <br> elevados al cuadrado son:  <br>${nuevoArreglo.join(", ")}`;
}
