import { Render } from "./Components/Render.js";

export function App() {
  const $main = document.querySelector(".main-content");

  $main.innerHTML = null;
  Render();
}
