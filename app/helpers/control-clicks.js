import { AddElement } from "../Components/Add-element.js";
import { RemoveElement } from "../Components/Remove-element.js";

export function controlBtns() {
  let menu = ".menu",
    btn = ".btn-menu",
    addInput = "#add-number",
    deleteInput = "#delete-number";

  const d = document,
    $menu = d.querySelector(menu),
    $btn = d.querySelector(btn);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      d.querySelector("main").classList.toggle("resize");
      d.querySelector("main").classList.toggle("move");
      d.querySelector(".first-section").classList.toggle("move");
      $menu.classList.toggle("show");
      $btn.classList.toggle("is-active");
    }
    if (e.target.matches(`${menu}  *`)) {
      d.querySelector("main").classList.toggle("move");
      d.querySelector("main").classList.toggle("resize");
      d.querySelector(".first-section").classList.toggle("move");
      $menu.classList.toggle("show");
      $btn.classList.toggle("is-active");
    }
    if (e.target.matches(addInput)) {
      AddElement();
    }
    if (e.target.matches(deleteInput)) {
      RemoveElement(deleteInput);
    }
  });
}
