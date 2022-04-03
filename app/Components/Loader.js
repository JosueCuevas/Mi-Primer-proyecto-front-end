export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "App/assets/tail-spin.svg";
  $loader.alt = "Cargando...";

  $loader.classList.add("loader");
  return $loader;
}
