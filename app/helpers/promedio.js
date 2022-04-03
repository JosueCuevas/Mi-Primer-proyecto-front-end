import appData from "./data.js";

export function Promedio() {
  const arreglo = appData.arreglo,
    newArray = arreglo.map((el) => Number(el));
  if (arreglo.length === 0) {
    appData.valid = false;
    return (appData.result = "El arreglo no puede estar vacío");
  } else appData.valid = true;

  let sumatoria = 0;

  for (let i = 0; i < newArray.length; i++) {
    sumatoria = newArray[i] + sumatoria;
  }

  appData.result = `El promedio del arreglo [${arreglo.join(", ")}] es: <br> ${
    sumatoria / newArray.length
  }`;
}
