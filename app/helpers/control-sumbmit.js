import { Result } from "../Components/Result.js";
import { AscDesc } from "./asc-desc.js";
import { Converter } from "./bin-dec-converter.js";
import { Capicua } from "./capicua.js";
import { Counter } from "./counter.js";
import { Cutter } from "./cutter-strings.js";
import { DateCalculate } from "./date.js";
import { Offer } from "./discount.js";
import { EmailValid } from "./email-valid.js";
import { DeletePatternString } from "./extract-pattern.js";
import { Factorial } from "./factorial.js";
import { InvertString } from "./inverter.js";
import { MinMax } from "./min-max.js";
import { NumeroPrimo } from "./numeros-primos.js";
import { OddOrEven } from "./odd-or-even.js";
import { PalindromeString } from "./palindrome.js";
import { ParImpar } from "./par-impar.js";
import { Power2 } from "./power-2.js";
import { Promedio } from "./promedio.js";
import { RandomNumber } from "./random-number.js";
import { RepeatString } from "./repeat-string.js";
import { SearchString } from "./search-word.js";
import { TemperatureConverter } from "./temperature-converter.js";
import { ValidName } from "./valid-name.js";
import { Vocals } from "./vocals.js";

export function controlSubmit() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    e.target.matches(".counter") ? Counter(".counter") : false;
    e.target.matches(".cutter") ? Cutter(".cutter") : false;
    e.target.matches(".separator") ? SeparateString(".separator") : false;
    e.target.matches(".repeat") ? RepeatString(".repeat") : false;
    e.target.matches(".text-revert") ? InvertString(".text-revert") : false;
    e.target.matches(".searching-word")
      ? SearchString(".searching-word")
      : false;
    e.target.matches(".palindrome-form")
      ? PalindromeString(".palindrome-form")
      : false;
    e.target.matches(".word") ? DeletePatternString(".word") : false;
    e.target.matches(".random") ? RandomNumber(".random") : false;
    e.target.matches(".capicua") ? Capicua(".capicua") : false;
    e.target.matches(".factorial") ? Factorial(".factorial") : false;
    e.target.matches(".primo") ? NumeroPrimo(".primo") : false;
    e.target.matches(".even-number") ? OddOrEven(".even-number") : false;
    e.target.matches(".temperature-convert")
      ? TemperatureConverter(".temperature-convert")
      : false;
    e.target.matches(".binar-dec-converter")
      ? Converter(".binar-dec-converter")
      : false;
    e.target.matches(".discount") ? Offer(".discount") : false;
    e.target.matches(".date") ? DateCalculate(".date") : false;
    e.target.matches(".vocals") ? Vocals(".vocals") : false;
    e.target.matches(".name-valid") ? ValidName(".name-valid") : false;
    e.target.matches(".email-form") ? EmailValid(".email-form") : false;
    e.target.matches(".power-2") ? Power2() : false;
    e.target.matches(".min-max") ? MinMax() : false;
    e.target.matches(".par-impar") ? ParImpar() : false;
    e.target.matches(".array-asc-desc") ? AscDesc() : false;
    e.target.matches(".array-prom") ? Promedio() : false;

    Result();
  });
}
