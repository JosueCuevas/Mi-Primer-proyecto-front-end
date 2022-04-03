import appData from "./data.js";
export function MinMax() {
  const arreglo = appData.arreglo;
  if (arreglo.length === 0) {
    appData.valid = false;
    return (appData.result = "El arreglo no puede estar vacío");
  }

  const arregloNuevo = [],
    newArray = arreglo.map((el) => el);

  newArray.sort(function (a, b) {
    return a - b;
  });

  appData.valid = true;
  arregloNuevo.push(newArray[0], newArray[arreglo.length - 1]);
  appData.result = `El número mínimo es: ${arregloNuevo[0]} y el número máximo es: ${arregloNuevo[1]}`;
}
