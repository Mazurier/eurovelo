function etapestxt(kilo, img, cat, dep, ariv, diffi, text) {

    return `
    <div class="etapesgriditem">
        <div class="etapeskilometre">
            ${kilo} km
        </div>
        <img src="img/${img}" alt="" class="etapesimg">
        <div class="smallmargintop">
            <div class="etapesbandeau">
                <div class="etapescat">
                    ${cat}
                </div>
                <a href="">
                    <img src="img/heart2.png" alt="" class="etapesfavoris">
                </a>
            </div>
            <div class="difficulte">
                ${diffi}
            </div>
            <div class="etapestrajet">
                ${dep} > ${ariv}
            </div>
            <div class="etapesdescription">
                ${text}
            </div>
        </div>
    </div>
    `;
  }
  

  let etapes = '';

  //dans l'ordre (kilo, img, cat, dep, ariv, diffi, text)
  etapes += etapestxt("34,21","placeholderetapes.png", "Naturos de los partimones", "Roubaix", "Berlin", "Fastoche","Ca roule beaucoup mais qui veut aller a Berlin serieux c'est au même niveau que Paris niveau propreté je veux bien que y'ai des trucs a voir & manger mais bon");
  etapes += etapestxt("34,21","placeholderetapes.png", "Naturos de los partimones", "Roubaix", "Berlin", "Fastoche","Ca roule beaucoup mais qui veut aller a Berlin serieux c'est au même niveau que Paris niveau propreté je veux bien que y'ai des trucs a voir & manger mais bon");
  etapes += etapestxt("34,21","placeholderetapes.png", "Naturos de los partimones", "Roubaix", "Berlin", "Fastoche","Ca roule beaucoup mais qui veut aller a Berlin serieux c'est au même niveau que Paris niveau propreté je veux bien que y'ai des trucs a voir & manger mais bon");
  etapes += etapestxt("34,21","placeholderetapes.png", "Naturos de los partimones", "Roubaix", "Berlin", "Fastoche","Ca roule beaucoup mais qui veut aller a Berlin serieux c'est au même niveau que Paris niveau propreté je veux bien que y'ai des trucs a voir & manger mais bon");
  document.getElementById("etapes").innerHTML = etapes;