function temoignagestxt(img, titre, text) {

    return `
    <div class="temoignageitem">
    <img src="img/${img}" class="temoignagebackground">
    <div class="temoignageabso">
        <div class="temoignageitemtitre">
            ${titre}
        </div>
        <div class="temoignageitemtext">
            ${text}
        </div>
    </div>
    <a href="" class="temoignagesfavoris">
        <img src="img/heart.png" class="temoignagesfavoris">
    </a>
</div>
    `;
  }
  

  let temoignages = '';

  //dans l'ordre ("img, titre, texte")
  temoignages += temoignagestxt("temoignage1.jpg","J'ai fait beaucoup de velo holala j'ai mal au pieds","Je pedalle, tu pedalle, tout le monde ils pedalent!");
  temoignages += temoignagestxt("temoignage1.jpg","J'ai fait beaucoup de velo holala j'ai mal au pieds","Je pedalle, tu pedalle, tout le monde ils pedalent!");
  temoignages += temoignagestxt("temoignage1.jpg","J'ai fait beaucoup de velo holala j'ai mal au pieds","Je pedalle, tu pedalle, tout le monde ils pedalent!");
  temoignages += temoignagestxt("temoignage1.jpg","J'ai fait beaucoup de velo holala j'ai mal au pieds","Je pedalle, tu pedalle, tout le monde ils pedalent!");
  document.getElementById("temoignages").innerHTML = temoignages;





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


  