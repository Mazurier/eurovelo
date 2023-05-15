function temoignagestxt(img, titre, text) {

    return `
    <div class="temoignageitem" style=" background-image: url(img/${img});">
    <div>
        <div class="temoignageitemtitre">
            ${titre}
        </div>
        <div class="temoignageitemtext">
            ${text}
        </div>
    </div>
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
  