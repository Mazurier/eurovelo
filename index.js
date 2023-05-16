const strapiUrl = "http://90.110.218.245:5002";
const endPointTemoignages ="/api/temoignages?sort=id&populate=*";
const endPointGrid ="/api/elements-chaleur?sort=id&populate=*";


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



async function loadTemoignages() {
    let containerTemoignages = document.getElementById('temoignages')
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
            containerTemoignages.appendChild(item);
            container.appendChild(title);
            container.appendChild(text);
        }
    }
}

loadTemoignages()

async function loadGrid() {
  let containerGrid = document.getElementById('chaleurgrid')
  let response = await fetch(strapiUrl + endPointGrid);
  if (response.ok) {
      let json = await response.json();
      for (let grid of json.data) {
          console.log(grid);

          let item = document.createElement('div');
          item.className = "griditem";

          let image = document.createElement('img');
          image.src = strapiUrl+grid.attributes.Image.data.attributes.url;
          image.className = 'gridbackground';

          let container = document.createElement('div');
          container.className = "gridabso";

          let title = document.createElement('div');
          title.className = "griditemtitre";
          title.innerHTML = grid.attributes.Titre;

          let text = document.createElement('div');
          text.className ="griditemtext";
          text.innerHTML = grid.attributes.SousTitre;

          item.appendChild(image);
          item.appendChild(container);
          containerGrid.appendChild(item);
          container.appendChild(title);
          container.appendChild(text);
      }
  }
}

loadGrid();