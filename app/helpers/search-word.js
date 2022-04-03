import appData from "./data.js";

export function SearchString(form) {
  const $form = document.querySelector(form);

  let count = 0,
    text = $form.text.value.toLowerCase(),
    search = $form.search.value.toLowerCase();

  const wordArray = text.split(" ");

  wordArray.forEach((word) => {
    if (word.includes(search)) {
      count++;
    }
  });

  if (count === 1) {
    return (appData.result = `En el texto "${$form.text.value}" la palabra  "${$form.search.value}" se repite ${count} vez`);
  }
  appData.result = `En el texto "${$form.text.value}" la palabra  "${$form.search.value}" se repite ${count} veces`;
}
