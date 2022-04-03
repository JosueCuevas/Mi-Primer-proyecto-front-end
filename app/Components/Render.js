import { Loader } from "../Components/Loader.js";
import { Router } from "./Router.js";

export function Render() {
  const $main = document.querySelector(".main-content");

  let { hash } = location;

  if (!hash) {
    return $main.classList.add("none");
  }

  $main.classList.remove("none");
  $main.classList.remove("main-border");
  $main.classList.add("flex");
  $main.appendChild(Loader());

  setTimeout(() => {
    // $main.classList.remove("flex");
    $main.classList.add("main-border");
    $main.innerHTML = Router(hash);
    window.scroll({
      top: 350,
      left: 0,
      behavior: "smooth",
    });
  }, 1500);
}
