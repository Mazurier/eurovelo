
 function trouvevelotxt(lien, img, text) {

    return `
    <a href="${lien}" class="nodeco">
    <div class="trouveveloitem">
        <img src="img/${img}" class="trouvebackground">
        <div class="trouvetxtimg">
        ${text}
        </div>
    </div>
    </a>
    `;
  }
  

  let trouvevelo = '';

  //dans l'ordre ("img, texte")
  trouvevelo += trouvevelotxt("","trouve1.png", "HÉBERGEMENTS");
  trouvevelo += trouvevelotxt("","trouve2.png", "LIEUX DE VISITE");
  trouvevelo += trouvevelotxt("","trouve3.png", "OFFICES DE TOURISME");
  trouvevelo += trouvevelotxt("","trouve4.png", "LOUEURS & RÉPARATEURS DE VÉLO");
  document.getElementById("trouvevelo").innerHTML = trouvevelo;

const strapiUrl = "http://90.110.218.245:5002";
const endPointTemoignages ="/api/temoignages?sort=id&populate=*";
let TemoignagesContainer = document.getElementById ('temoignages');

async function loadTemoignages() {
    let response = await fetch(strapiUrl + endPointTemoignages);
    if (response.ok) {
        let json = await response.json();
        for (let temoignage of json.data) {
            console.log(temoignage);

            let item = document.createElement('div');
            item.className = "temoignageitem";

            let image = document.createElement('img');
            image.src = strapiUrl+temoignage.attributes.Image.data.attributes.url;
            image.className = 'temoignagebackground';

            let container = document.createElement('div');
            container.className = "temoignageabso";

            let title = document.createElement('div');
            title.className = "temoignageitemtitre";
            title.innerHTML = temoignage.attributes.Titre;

            let text = document.createElement('div');
            text.className ="temoignageitemtext";
            text.innerHTML = temoignage.attributes.Resume;

            item.appendChild(image);
            item.appendChild(container);
            TemoignagesContainer.appendChild(item);
            container.appendChild(title);
            container.appendChild(text);
        }
    }
}

loadTemoignages();