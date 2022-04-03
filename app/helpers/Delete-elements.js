import arrayData from "./data.js";
export function DeleteNumber() {
  const arreglo = arrayData.arreglo;
  arreglo.pop();

  console.log(arreglo);
}
