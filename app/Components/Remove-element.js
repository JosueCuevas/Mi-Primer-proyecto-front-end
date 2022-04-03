import { DeleteNumber } from "../helpers/Delete-elements.js";
import arrayData from "../helpers/data.js";

export function RemoveElement(btn) {
  const $sectionElements = document.querySelector(".added-numbers");

  if (arrayData.arreglo.length === 0) {
    return false;
  }

  $sectionElements.removeChild($sectionElements.lastElementChild);
  DeleteNumber();
}
