import appData from "./data.js";

export function PalindromeString(form) {
  const $form = document.querySelector(form);

  let newText = $form.palindrome.value.split(" ").join("").toLowerCase(),
    palindrome = false,
    reverseText = newText.split("").reverse().join("");

  console.log(newText, reverseText);

  if (newText === reverseText) {
    palindrome = true;
  }

  palindrome
    ? (appData.result = `El texto "${$form.palindrome.value}" es un palíndromo`)
    : (appData.result = `El texto "${$form.palindrome.value}" NO es un palíndromo`);
}
