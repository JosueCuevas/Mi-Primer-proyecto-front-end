import appData from "../helpers/data.js";

export function Result() {
  const $section = document.querySelector(".section-container"),
    $result = document.createElement("p");
  $result.setAttribute("data-result", true);

  if (!appData.valid) {
    $result.classList.add("invalid");
  } else {
    $result.classList.remove("invalid");
  }

  if ($section.lastElementChild.hasAttribute("data-result")) {
    console.log(true);
    $section.removeChild($section.lastElementChild);
  }

  $result.innerHTML = appData.result;

  $section.insertAdjacentElement("beforeend", $result);
}
