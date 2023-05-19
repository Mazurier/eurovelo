const strapiUrl = "http://85.169.220.243:5002";
const endPointEtapes = "/api/etapes?sort=id&populate=*";

async function trajet() {
let containertrajet = document.getElementById('trajet')
let response = await fetch(strapiUrl + endPointEtapes);
if (response.ok) {
    let json = await response.json();
    numID = 0;
    for (let etapes of json.data) {
        console.log(etapes);

        let retour = document.createElement('div');
        retour.className = 'retour';

        let lienretour = document.createElement('a');
        lienretour.setAttribute('href', 'itineraire.html');

        let imageretour = document.createElement('img');
        imageretour.setAttribute('src','img/arrow.png');
        imageretour.className = 'arrow';

        let simplediv = document.createElement('div');
        simplediv.className = 'longdiv';

        let simplediv2 = document.createElement('div');
        
        let endroit = document.createElement('div');
        endroit.className = 'endroit';

        let endroitdepart = document.createElement('div');
        endroitdepart.innerHTML = etapes.attributes.VilleDepart;

        let endroitentre = document.createElement('div');
        endroitentre.innerHTML = '>';

        let endroitarivee = document.createElement('div');
        endroitarivee.innerHTML = etapes.attributes.VilleArrivee;
        
        let leurovelo = document.createElement('div');
        leurovelo.className = 'leurovelo5';
        leurovelo.innerHTML = 'L\'Eurovelo5';

        let head = document.createElement('div');
        head.className = 'head';
        head.innerHTML = 'DESCRIPTION';

        let trajetcat = document.createElement('div');
        trajetcat.className = 'trajetcategory';
        trajetcat.innerHTML = etapes.attributes.Titre;

        let info = document.createElement('div');
        info.className = 'info';

        let kilo = document.createElement('div');
        kilo.className = 'kilo';
        kilo.innerHTML = etapes.attributes.Distance;

        let kiloafter = document.createElement('span');
        kiloafter.className = 'kiloafter';
        kiloafter.innerHTML = 'settings_ethernet';

        let temps = document.createElement('div');
        temps.className = 'temps';
        temps.innerHTML = etapes.attributes.Minutes;

        let illus = document.createElement('div');
        illus.className = 'trajetimgplace';

        let trajetimg = document.createElement('img');
        trajetimg.className = 'trajetimg';
        trajetimg.src = strapiUrl+etapes.attributes.Image.data.attributes.formats.medium.url;

        let deparive = document.createElement('div');
        deparive.className = 'departarivee';

        let depart = document.createElement('div');
        depart.className = 'depart';
        depart.innerHTML = etapes.attributes.VilleDepart;

        let entredeux = document.createElement('div');
        entredeux.className = 'doublefleche';
        entredeux.innerHTML = 'swap_horiz';

        let arivee = document.createElement('div');
        arivee.className = 'arivee';
        arivee.innerHTML = etapes.attributes.VilleArrivee;

        let titre = document.createElement('div');
        titre.className = 'titre';
        titre.innerHTML = etapes.attributes.Resume;

        let texte = document.createElement('div');
        texte.className = 'texte';
        texte.innerHTML = etapes.attributes.Description;

        let download = document.createElement('a');
        download.className = 'download';
        download.setAttribute('href', 'gpx/gpx1.gpx');
        download.setAttribute('download', 'gpx1.gpx');
        download.innerHTML = 'download';


        let difficulte = document.createElement('div');
            difficulte.className = "difficulte";
            difficulte.innerHTML = etapes.attributes.Difficulte;

        let difflvl = etapes.attributes.Difficulte;
        if (difflvl == "J'ai l'habitude") {
            difficulte.className += " moyen";
        } else if (difflvl == "Je me dépasse") {
            difficulte.className += " difficile";
        } else if (difflvl == "Je débute / En famille") {
            difficulte.className += " facile";
        }



        containertrajet.appendChild(retour);
        retour.appendChild(lienretour);
        lienretour.appendChild(imageretour);
        retour.appendChild(simplediv);
        simplediv.appendChild(simplediv2);
        simplediv2.appendChild(endroit);
        endroit.appendChild(endroitdepart);
        endroit.appendChild(endroitentre);
        endroit.appendChild(endroitarivee);
        simplediv2.appendChild(leurovelo);
        simplediv.appendChild(download);
        containertrajet.appendChild(head);
        containertrajet.appendChild(trajetcat);
        containertrajet.appendChild(info);
        info.appendChild(kilo);
        kilo.appendChild(kiloafter);
        info.appendChild(temps);
        info.appendChild(difficulte);
        containertrajet.appendChild(illus);
        illus.appendChild(trajetimg);
        containertrajet.appendChild(deparive);
        deparive.appendChild(depart);
        deparive.appendChild(entredeux);
        deparive.appendChild(arivee);
        containertrajet.appendChild(titre);
        containertrajet.appendChild(texte);


        }
    }
}
trajet();