import { App } from "./App.js";
import { controlBtns } from "./helpers/control-clicks.js";
import { controlSubmit } from "./helpers/control-sumbmit.js";
import appData from "./helpers/data.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
  controlBtns();
  controlSubmit();
});
window.addEventListener("hashchange", (e) => {
  App();
  appData.arreglo = [];
  appData.result = "";
});
