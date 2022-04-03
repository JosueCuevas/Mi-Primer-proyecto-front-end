export function Router(hash) {
  document.querySelector(".loader").classList.add("none");
  let main = "";
  switch (hash) {
    case "#seccion-1":
      main = `<section class="section-container" id="seccion-1">
        <h2>Contando Caracteres</h2>
        <form class="counter">
          <input type="text" name="text" autocomplete="off" placeholder="Ingresa un texto" required>
          <input type="submit" value="Contar">
        </form>
      </section>`;
      return main;
    case "#seccion-2":
      main = `<section class="section-container" id="seccion-2">
      <h2>Recortando Cadena de Texto</h2>
      <p class="directions"> <b>La siguiente función te devuelve el texto recortado según el número de caracteres indicados, <br> P.e:
          "Hola Mundo", 4 devolverá "Hola". </b></p>
      <form class="cutter">
        <input type="text" name="cut-text" autocomplete="off" placeholder="Ingresa un texto" required>
        <input type="number" name="cut-limit" placeholder="Elige el numero " required>
        <input type="submit" value="Recortar">
      </form>
    </section>`;
      return main;
    case "#seccion-3":
      main = ` <section class="section-container" id="seccion-3">
      <h2>Repitiendo texto</h2>
      <p class="directions"><b>
          Esta función repetirá el texto el numero de veces que le indiques
        </b></p>
      <form class="repeat">
        <input type="text" name="text" autocomplete="off" placeholder="Ingresa un texto" required>
        <input type="number" name="repeat" placeholder="Elige el numero " required>
        <input type="submit" value="Repetir">
      </form>
    </section>`;
      return main;
    case "#seccion-4":
      main = `<section class="section-container" id="seccion-4">
      <h2>Invirtiendo Texto</h2>
      <p class="directions"><b>
          Esta función invertira los caracteres de un texto, ¡pruébala!
        </b></p>
      <form class="text-revert">
        <input type="text" name="text" required autocomplete="off" placeholder="Ingresa un Texto...">
        <input type="submit" value="Invertir">
      </form>
    </section>`;
      return main;
    case "#seccion-5":
      main = `    <section class="section-container" id="seccion-5">
      <h2>Buscando palabras repetidas</h2>
      <p class="directions"><b>
          Esta función te dirá cuantas veces se repite una palabra en un texto que ingreses
        </b></p>
      <form class="searching-word">
        <input type="text" name="text" autocomplete="off" placeholder="Ingresa un texto" required>
        <input type="text" name="search" autocomplete="off" placeholder="Ingresa el texto a buscar" required>
        <input type="submit" value="Recortar">
      </form>
    </section>`;
      return main;
    case "#seccion-6":
      main = `<section class="section-container" id="seccion-6">
      <h2>Busca Palindromos</h2>
      <p class="directions"><b>
          Ingresa un palindromo
        </b></p>
      <form class="palindrome-form">
        <input type="text" name="palindrome" required autocomplete="off" placeholder="Ingresa un Texto...">
        <input type="submit" value="Validar">
      </form>
    </section>`;
      return main;
    case "#seccion-7":
      main = ` <section class="section-container" id="seccion-7">
      <h2>Eliminar patrones en el texto</h2>
      <p class="directions"><b>
          Esta función elimina cierto patrón de caracteres de un texto dado, <br> P.ej: ("xyz1, xyz2, xyz3,
          xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
        </b></p>
      <form class="word">
        <input type="text" name="text" autocomplete="off" placeholder="Ingresa un texto..." required>
        <input type="text" name="pattern" autocomplete="off" placeholder="Ingresa un patrón..." required>
        <input type="submit" value="Extraer">
      </form>
    </section>`;
      return main;
    case "#seccion-8":
      main = `    <section class="section-container" id="seccion-8">
      <h2>Obteniendo numeros aleatorios</h2>
      <p class="directions"><b>
          Obtendrás un numero aleatorio entre el numero máximo y mínimo que escojas
        </b></p>
      <form class="random">
        <input type="number" name="max-number" placeholder="Número Mínimo" autocomplete="off" required>
        <input type="number" name="min-number" placeholder="Número Máximo" autocomplete="off" required>
        <input type="submit" value="Generar">
      </form>
    </section>
`;
      return main;
    case "#seccion-9":
      main = `    <section class="section-container" id="seccion-9">
      <h2>Evaluando números capicúa</h2>
      <p class="directions"><b>
          Ingresa un número capicúa (p.ej. 2002)
        </b></p>
      <form class="capicua">
        <input type="number" name="capicua" autocomplete="off" placeholder="Ingresa un número" required>
        <input type="submit" value="Intentar">
      </form>
    </section>`;
      return main;
    case "#seccion-10":
      main = `<section class="section-container" id="seccion-10">
      <h2>Factorial de un numero</h2>
      <p class="directions"><b>
          Ingresa un número y te daré el factorial
        </b></p>
      <form class="factorial">
        <input type="number" name="number" autocomplete="off" placeholder="Ingrese un número" required>
        <input type="submit" value="Obtener">
      </form>
    </section>`;
      return main;
    case "#seccion-11":
      main = `<section class="section-container" id="seccion-11">
      <h2>¿Es un número Primo?</h2>
      <p class="directions"><b>
          Ingresa un número para saber si es primo
        </b></p>
      <form class="primo">
        <input type="number" name="number" required placeholder="Ingrese un Numero..." autocomplete="off">
        <input type="submit" value="Probar">
      </form>
    </section>`;
      return main;
    case "#seccion-12":
      main = `<section class="section-container" id="seccion-12">
      <h2>Numeros Pares e impares</h2>
      <p class="directions"><b>
          Ingresa un número para saber si es par o impar
        </b></p>
      <form class="even-number">
        <input type="number" name="number" placeholder="Ingresa un Numero..." autocomplete="off">
        <input type="submit" value="Probar">
      </form>
    </section>`;
      return main;
    case "#seccion-13":
      main = `
    <section class="section-container" id="seccion-13">
      <h2>Convertidor de Temperatura</h2>
      <form class="choice-one temperature-convert">
        <input type="number" name="number" placeholder="Ingresa un numero" required autocomplete="off"><br>
        <p class="directions">Elije la escala a la que quieres convertir</p>
        <div>
          <label for="scale">°C</label>
          <input type="radio" name="scale" id="scale" value="C" required>
          <label for="scale">°F</label>
          <input type="radio" name="scale" id="scale" value="F">
        </div>
        <input type="submit" value="Convertir">
      </form>
    </section>`;
      return main;
    case "#seccion-14":
      main = `
    <section class="section-container" id="seccion-14">
      <h2>Convertidor Binario-Decimal</h2>
      <form class="choice-one binar-dec-converter">
        <input type="number" name="number" required placeholder="Ingresa un numero" autocomplete="off">
        <p class="directions">Elige la base de tu número <i>(10 para decimal, 2 para binario)</i></p>
        <div>
          <label for="scale">10</label>
          <input type="radio" name="scale" id="base" value=10 required>
          <label for="scale">2</label>
          <input type="radio" name="scale" id="base" value=2>
        </div>
        <input type="submit" value="Convertir">
      </form>
    </section>`;
      return main;
    case "#seccion-15":
      main = `
    <section class="section-container" id="seccion-15">
      <h2>Descuentos</h2>
      <p class="directions"><b>
          Ingresa un monto y el porcentaje de descuento
        </b></p>
      <form class="discount">
        <input type="number" name="number" required autocomplete="off" placeholder="Ingresa un monto $">
        <input type="number" name="percent" required autocomplete="off" placeholder="Ingresa el % descuento">
        <input class="w-60" type="submit" value="Obtener Descuento">
      </form>
    </section>`;
      return main;
    case "#seccion-16":
      main = `
    <section class="section-container" id="seccion-16">
      <h2>Cálcula cuantos años han pasado</h2>
      <p class="directions"><b>
          Ingresa una fecha
        </b></p>
      <form class="date">
        <input type="date" name="date" required>
        <input type="submit" value="Calcular">
      </form>
    </section>`;
      return main;
    case "#seccion-17":
      main = `
    <section class="section-container" id="seccion-17">
      <h2>Vocales y Consonantes</h2>
      <p class="directions"><b>
          Esta función te dirá cuantas vocales y consonantes tiene un texto
        </b></p>
      <form class="vocals">
        <input type="text" name="text" placeholder="ingresa un texto..." required autocomplete="off">
        <input type="submit" value="Obtener">
      </form>
    </section>`;
      return main;
    case "#seccion-18":
      main = `
    <section class="section-container" id="seccion-18">
      <h2>Validación de Nombres</h2>
      <form class="name-valid">
        <input class ="name" type="text" name="text" placeholder="Ingresa tu nombre..." required autocomplete="off" title="El nombre solo acepta letras y espacios"
      pattern="^[A-Z,a-z,ÑñÁáÉéÍíÓóÚúÜü ]+$">
        <input type="submit" value="Enviar">
      </form>
    </section>`;
      return main;
    case "#seccion-19":
      main = `<section class="section-container" id="secccion-20">
      <h2>Validación de e-mail</h2>
      <form class="email-form">
        <input type="email" name="email" placeholder="Escribe tu email"
          required>
        <input type="submit" name="enviar" value="Enviar">
      </form>
    </section>`;
      return main;
    case "#seccion-20":
      main = `
      <section class="section-container" id="seccion-20">
      <h2>Números al cuadrado</h2>
      <p class="directions"><b>
          Esta función te devolverá todos los números que ingreses elevados a la segunda potencia
        </b></p>
        <div class="border-thin">
        <span><b>Números Agregados: </b></span>
        <article class="added-numbers flex f-center f-wrap">
        </article>
        </div>
      <form class="power-2 add-elements-form">
        <input type="number" name="number" autocomplete="off" placeholder="Ingresa un numero">
        <input class="w-45 inline" type="button" id="add-number" value="Agregar número">
        <input class="w-45 inline" type="button" id="delete-number" value="Borrar número">
        <input class="array-submit" type="submit" value="Resultado">
      </form>
    </section>`;
      return main;
    case "#seccion-21":
      main = `
    <section class="section-container" id="seccion-21">
      <h2>Número Mayor y Menor</h2>
      <p class="directions"><b>
          Esta función te devolverá el número más grande y más pequeño que ingreses
        </b></p>
        <div class="border-thin">
        <span><b>Números Agregados: </b></span>
        <article class="added-numbers flex f-center f-wrap">
        </article>
        </div>
      <form class="min-max">
        <input type="number" name="number" autocomplete="off" placeholder="Ingresa un numero">
        <input class="w-45 inline" type="button" id="add-number" value="Agregar número">
        <input class="w-45 inline" type="button" id="delete-number" value="Borrar número">
        <input class="array-submit" type="submit" value="Resultado">
      </form>
    </section>`;
      return main;
    case "#seccion-22":
      main = `
    <section class="section-container" id="seccion-22">
      <h2>Arreglo de pares e impares</h2>
      <p class="directions"><b>
          Esta función te devolverá un arreglo con números pares y otro con números impares ¡ingresa tantos números como
          quieras!
        </b></p>
        <div class="border-thin">
        <span><b>Números Agregados: </b></span>
        <article class="added-numbers flex f-center f-wrap">
        </article>
        </div>
      <form class="par-impar">
        <input type="number" name="number" autocomplete="off" placeholder="Ingresa un numero">
        <input class="w-45 inline" type="button" id="add-number" value="Agregar número">
        <input class="w-45 inline" type="button" id="delete-number" value="Borrar número">
        <input class="array-submit" type="submit" value="Resultado">
      </form>
    </section>`;
      return main;
    case "#seccion-23":
      main = `
    <section class="section-container" id="seccion-23">
      <h2>Arreglo de ascendentes y descendentes</h2>
      <p class="directions"><b>
          Esta función te devolverá un arreglo con números en orden ascendente y otro en orden descendente ¡ingresa
          tantos números como quieras!
        </b></p>
        <div class="border-thin">
        <span><b>Números Agregados: </b></span>
        <article class="added-numbers flex f-center f-wrap">
        </article>
        </div>
      <form class="array-asc-desc">
        <input type="number" name="number"  autocomplete="off" placeholder="Ingresa un numero">
        <input class="w-45 inline" type="button" id="add-number" value="Agregar número">
        <input class="w-45 inline" type="button" id="delete-number" value="Borrar número">
        <input class="array-submit" type="submit" value="Resultado">
      </form>
    </section>`;
      return main;
    case "#seccion-24":
      main = `
    <section class="section-container" id="seccion-24">
      <h2>Obtener Promedio</h2>
      <p class="directions"><b>
          Esta función te devolverá el promedio de los números que quieras ¡ingresa
          tantos números como quieras!
        </b></p>
        <div class="border-thin">
        <span><b>Números Agregados: </b></span>
        <article class="added-numbers flex f-center f-wrap">
        </article>
        </div>
      <form class="array-prom">
        <input  type="number" name="number" autocomplete="off" placeholder="Ingresa un numero">
        <input class="w-45 inline"type="button" id="add-number" value="Agregar número">
        <input class="w-45 inline" type="button" id="delete-number" value="Borrar número">
        <input class="array-submit" type="submit" value="Resultado">
      </form>
    </section>`;
      return main;
    case "#seccion-25":
      main = `
        <section class="section-info" id="seccion-25">
        <h2>Acerca de...</h2>
        <p>Esta pequeña página de prueba fue construida a modo de Single Page Aplication (SPA) con la intención de plasmar la mayoría de mis conocimientos sobre <i>HTML</i>, <i>CSS</i> y <i>Javascript</i>, los cuales adquirí de manera autodidácta a lo largo de un año.</p>
        <p>Este es mi primer proyecto serio y como tal, debe estar lleno de algunas malas prácticas y cuestiones de novato que mejoraré con el tiempo, pero el hecho de que puedas estar aquí, interactuando con el sitio, significa que he avanzado lo suficiente. Por favor siéntete libre de usarla tantas veces como desees y si es posible, no olvides enviarme alguna retroalimentación en mis redes sociales </p>
        <h3>Y ya que estoy hablando de ti, hay varias posibles explicaciones para determinar quien eres:</h3>
        <p>Quizá seas uno de mis familiares y amigos cercanos a quienes les compartí el enlace de este sitio, en cuyo caso quiero agradecerte y espero que puedas darme alguna retroalimentación para mejorar :)</p>
        <p>Puede ser que estás aquí porque seguiste el enlace que aparece en mi portafolio o mi CV, si es así por favor contrátame, estoy mejorando y soy buen pedo ja ja ja</p>
        <p>O quizá seas @jonmircha, a quien admiro y estimo mucho, solo quisiera agradecerle por su pasión y dedicación a la enseñanza </p>
        <p>Y por último, quizá seas yo del futuro, solo espero que seas feliz donde sea que estés y recuerda que aquí fué donde comenzó todo...</p>
        <p>¡Muchas gracias!</p>
       <blockquote>Josué Cuevas</blockquote>
      <div class="social-media">
      <a href="https://github.com/JosueCuevas" target="_blank" rel="noopener"><i class="bi bi-github b"></i></a>
      <a href="https://www.instagram.com/josue.__.cuevas/" target="_blank" rel="noopener"><i class="bi bi-instagram b"></i></a>
      <a href="https://www.linkedin.com/in/josu%C3%A9-cuevas-80a8a5236/"><i class="bi bi-linkedin b"></i></a>
      <a href="https://t.me/josue_cuevas" target="_blank" rel="noopener"><i class="bi bi-telegram b"></i></a>
      <a href="https://twitter.com/JosuCuevas14" target="_blank" rel="noopener"><i class="bi bi-twitter b"></i></a>
      </div>
        </section>
        `;
      return main;
  }
}
