/*
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
  */

  const strapiUrl = "http://85.169.220.243:5002";
  const endPointEtapes = "/api/etapes?sort=id&populate=*";

  async function loadEtapes() {
    let containerEtapes = document.getElementById('etapes')
    let response = await fetch(strapiUrl + endPointEtapes);
    if (response.ok) {
        let json = await response.json();
        for (let etapes of json.data) {
            console.log(etapes);


            let item = document.createElement('div');
            item.className = 'etapesgriditem';

            let image = document.createElement('img');
            image.src = strapiUrl+etapes.attributes.Image.data.attributes.url;
            image.className = 'etapesimg';

            let smallmargin = document.createElement('div');
            smallmargin.className = 'smallmargintop';

            let etapesbandeau = document.createElement('div');
            etapesbandeau.className = 'etapesbandeau';

            let resume = document.createElement('div');
            resume.className = "etapescat";
            resume.innerHTML = etapes.attributes.Resume;

            let coeur = document.createElement('a');

            let lecoeur = document.createElement('img');
            lecoeur.className ='etapesfavoris';
            lecoeur.src = "img/heart2.png";

            let titre = document.createElement('div');
            titre.className ='etapestrajet';
            titre.innerHTML = etapes.attributes.Titre;

            let text = document.createElement('div');
            text.className ="etapesdescription";
            text.innerHTML = etapes.attributes.Description;

            let difficulte = document.createElement('div');
            difficulte.className = "difficulte";
            difficulte.innerHTML = etapes.attributes.Difficulte;

            let difflvl = etapes.attributes.Difficulte;
            if (difflvl == "J'ai l'habitude") {
                difficulte.className += " moyen";
            } else if (difflvl == "Je me dépasse") {
                difficulte.className += " difficile";
            } else if (difflvl == "Je débute / En famille") {
                difficulte.className += " facile"
            }

            let distance = document.createElement('div');
            distance.className = "distanceitem";
            distance.innerHTML = etapes.attributes.Distance;
            
            let minutes = document.createElement('div');
            minutes.className = "minutesitem";
            minutes.innerHTML = etapes.attributes.minutes;

            let villedepart = document.createElement('div');
            villedepart.className ="villedepartitem";
            villedepart.innerHTML = etapes.attributes.VilleDepart;

            let villearrivee = document.createElement('div');
            villearrivee.className ="villearriveeitem";
            villearrivee.innerHTML = etapes.attributes.VilleArrivee;

            let typepaysage = document.createElement('div');
            typepaysage.className = "typepaysageitem";
            typepaysage.innerHTML = etapes.attributes.type_paysages;

            containerEtapes.appendChild(item);
            item.appendChild(image);
            item.appendChild(smallmargin);
            smallmargin.appendChild(etapesbandeau);
            etapesbandeau.appendChild(resume);
            etapesbandeau.appendChild(coeur);
            coeur.appendChild(lecoeur);
            smallmargin.appendChild(difficulte);
            smallmargin.appendChild(titre);
            smallmargin.appendChild(text);
            console.log (difflvl)
        }
    }
}
loadEtapes();