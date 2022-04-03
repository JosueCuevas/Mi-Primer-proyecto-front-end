import appData from "./data.js";
export function DateCalculate(form) {
  const $form = document.querySelector(form);

  const arrayDate = $form.date.value.split("-"),
    date = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2]);

  let timePassed = new Date().getTime() - date.getTime(),
    yearsMS = 1000 * 60 * 60 * 24 * 365 + 21600000,
    humanYears = Math.floor(timePassed / yearsMS);

  // console.log(Math.sign(humanYears))

  Math.sign(humanYears) === -1
    ? (appData.result = `La fecha que ingresaste está en el futuro`)
    : Math.sign(humanYears) === 0
    ? (appData.result = `Estamos en el año actual ${date.getFullYear()}`)
    : (appData.result = `Han pasado ${humanYears} años desde la fecha ingresada`);
}
