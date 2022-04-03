import appData from "./data.js";

export function AscDesc() {
  const arreglo = appData.arreglo,
    newArray = arreglo.map((el) => el);
  if (arreglo.length === 0) {
    console.error("El arreglo esta vacío");
    appData.result = `No haz ingresado números`;
    appData.valid = false;
    return false;
  } else {
    appData.valid = true;
  }

  newArray.sort(function (a, b) {
    return a - b;
  });

  let copiaArray = newArray.slice(0);

  appData.result = `Orden Ascendente: ${newArray.join(
    ", "
  )} <br><br> Orden Descendente: ${copiaArray.reverse().join(", ")}`;
}
