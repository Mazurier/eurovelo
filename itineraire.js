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

  const strapiUrl = "http://90.110.218.245:5002";
  const endPointEtapes = "/api/etapes?sort=id&populate=*";

  async function loadEtapes() {
    let containerEtapes = document.getElementById('chaleurgrid')
    let response = await fetch(strapiUrl + endPointEtapes);
    if (response.ok) {
        let json = await response.json();
        for (let etapes of json.data) {
            console.log(etapes);

            let item = document.createElement('div');
            item.classname = "etapeitem";

            let image = document.createElement('img');
            image.src = strapiUrl+etapes.attributes.Image.data.attributes.url;
            image.className = 'gridbackground';

            let container = document.createElement('div');
            container.className = "etapeabso";

            let text = document.createElement('div');
            text.className ="etapeitemtext";
            text.innerHTML = etapes.attributes.Description;

            let difficulte = document.createElement('div');
            difficulte.className = "difficulteitem";
            difficulte.innerHTML = etapes.attributes.Difficulte;

            let distance = document.createElement('div');
            distance.className = "distanceitem";
            distance.innerHTML = etapes.attributes.Distance;

            let resume = document.createElement('div');
            resume.className = "etapesresumeitem";
            resume.innerHTML = etapes.attributes.Resume;
            
            let minutes = document.createElement('div');
            minutes.className = "minutesitem";
            minutes.innerHTML = etapes.attributes.minutes;

            let villedepart = document.createElement('div');
            villedepart.className ="villedepartitem";
            villedepart.innerHTML = etapes.attributes.VilleDepart;

            let villearrivee = document.createElement('div');
            villearrivee.className ="villearriveeitem";
            villearrivee.innerHTML = etapes.attributes.VilleArrivee;

            containerEtapes.appendChild(item);
            item.appendChild(image);
            item.appendChild(container);
            container.appendChild(text);
            container.appendChild(difficulte);
            container.appendChild(distance);
            container.appendChild(resume);
            container.appendChild(minutes);
            container.appendChild(villedepart);
            container.appendChild(villearrivee);

loadEtapes();