import { AddNumbers } from "../helpers/Insert-elements.js";

export function AddElement() {
  const d = document,
    $sectionElements = d.querySelector(".added-numbers"),
    $form = d.querySelector("form"),
    $newSpan = d.createElement("span");
  $newSpan.classList.add("margin-0_5r");

  if ($form.number.value === "") {
    return false;
  }

  let number = $form.number.value;

  $newSpan.textContent = `${number},`;

  console.log(number);

  $sectionElements.insertAdjacentElement("beforeend", $newSpan);

  $form.number.value = "";
  $form.number.focus();

  AddNumbers(number);
}
