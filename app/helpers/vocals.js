import appData from "./data.js";

export function Vocals(form) {
  const $form = document.querySelector(form);

  let vocals = 0,
    consonants = 0,
    arrayLetter = $form.text.value.split("");

  arrayLetter.forEach((letter) => {
    if (/[a,e,i,o,u,á,é,í,ó,ú,ü]/gi.test(letter)) {
      vocals++;
    }
    if (/[b-d,f-h,j-n,p-t,v-z]/gi.test(letter)) {
      consonants++;
    }
  });

  appData.result = `El texto "${$form.text.value}" Conetiene ${vocals} vocales y ${consonants} consonantes`;
}
