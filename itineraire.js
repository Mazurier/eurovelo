
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
        let numID = 0;
        for (let etapes of json.data) {
            console.log(etapes);


            let item = document.createElement('div');
            item.id = numID;
            item.addEventListener('mouseover', function(e){
                var nomfonction = "hoveryes" + item.id;
                console.log(nomfonction);
                window[nomfonction]();
            });
            item.addEventListener('mouseleave', function(){
                var nomfonction = "hoverno" + item.id;
                console.log(nomfonction);
                window[nomfonction]();
            })

            item.addEventListener('click', function(){
              let fetchid = Number(item.id) + 1;
              choixarticle(fetchid);
              var nomfonction = "hoverno" + item.id;
              console.log(nomfonction);
              window[nomfonction]();
            })


            item.className = 'etapesgriditem';
            numID ++;

            let image = document.createElement('img');
            image.src = strapiUrl+etapes.attributes.Image.data.attributes.formats.small.url;
            image.className = 'etapesimg';

            let smallmargin = document.createElement('div');
            smallmargin.className = 'smallmargintop';

            let etapesbandeau = document.createElement('div');
            etapesbandeau.className = 'etapesbandeau';

            let resume = document.createElement('div');
            resume.className = "etapescat";
            paysages = etapes.attributes.type_paysages.data;
            
            console.log(paysages)
            
            let coeur = document.createElement('a');

            let lecoeur = document.createElement('img');
            lecoeur.className ='etapesfavoris';
            lecoeur.src = "img/heart2.png";

            let titre = document.createElement('div');
            titre.className ='etapestrajet';
            titre.innerHTML = etapes.attributes.Titre;

            let text = document.createElement('div');
            text.className ="etapesdescription";
            text.innerHTML = etapes.attributes.Resume;

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


            for (let Object of paysages) {
                let category = document.createElement('span');
                category.className = "category";
                resume.appendChild(category);
                category.innerHTML += Object.attributes.Nom;
            }
        }
    }
}
















    // Create the map instance
    var map = L.map('map').setView([50.72521885575759, 2.5100971952212753], 10);
  
    // Add the tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map);
  
    // Define the default GPX track style
    var normalStyle = { color: 'blue', opacity: 0.7, weight: 4 };
  
    // Add GPX tracks to the map 
    var gpx0 = new L.GPX('gpx/calais-ardres.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx1 = new L.GPX('gpx/ardres-watten.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx2 = new L.GPX('gpx/watten-st-omer.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx3 = new L.GPX('gpx/st-omer-aire-sur-la-lys.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx4 = new L.GPX('gpx/aire-sur-la-lys-st-venant.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx5 = new L.GPX('gpx/st-venant-bethune.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx6 = new L.GPX('gpx/bethunes-olhain.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx7 = new L.GPX('gpx/olhain-angres.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx8 = new L.GPX('gpx/angres-lens.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx9 = new L.GPX('gpx/lens-don.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx10 = new L.GPX('gpx/don-lille.gpx', { polyline_options: normalStyle }).addTo(map);
    var gpx11 = new L.GPX('gpx/lille-wattrelos.gpx', { polyline_options: normalStyle }).addTo(map);
  
    // Define the hover style
    var hoverStyle = { color: 'red', opacity: 1 };
  
    // Add event listeners to each GPX track
  
    //C'est pas opti pour un sou mais ca marche donc heh

    //Ce code est IMONDE mais il marche, ammusez vous a l'améliorer si vous avez rien a faire
   
  
  
  
  
    gpx0.on('mouseover', function(e) {
      truc1(e);
    });
    gpx0.on('mouseout', function() {
        console.log('tetete')
      truc2();
    });
    gpx0.on('click', function(){
      choixarticle(1);
    })
  


    function truc1(e) {
        console.log("trucutruc")
        gpx0.setStyle(hoverStyle);
        var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Calais-Ardres')
        .openOn(map);
        var topOffset = -popup.getElement().offsetHeight - 10;

    }
    function truc2() {
        gpx0.setStyle(normalStyle);
        map.closePopup();
    };

    
  
    
  
  
  
    gpx1.on('mouseover', function(e) {
      gpx1.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Ardres-Watten')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx1.on('mouseout', function() {
      gpx1.setStyle(normalStyle);
      map.closePopup();
    });
    gpx1.on('click', function(){
      choixarticle(2);
    })
  
    gpx2.on('mouseover', function(e) {
      gpx2.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Watten-St-Omer')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx2.on('mouseout', function() {
      gpx2.setStyle(normalStyle);
      map.closePopup();
    });
    gpx2.on('click', function(){
      choixarticle(3);
    })
  
    gpx3.on('mouseover', function(e) {
      gpx3.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('St-Omer-Aire-sur-la-Lys')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx3.on('mouseout', function() {
      gpx3.setStyle(normalStyle);
      map.closePopup();
    });
    gpx3.on('click', function(){
      choixarticle(4);
    })
    
    gpx4.on('mouseover', function(e) {
      gpx4.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Aire-sur-la-Lys-St-Venant')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx4.on('mouseout', function() {
      gpx4.setStyle(normalStyle);
      map.closePopup();
    });
    gpx4.on('click', function(){
      choixarticle(5);
    })
  
    gpx5.on('mouseover', function(e) {
      gpx5.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('St-Venant-Bethune')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx5.on('mouseout', function() {
      gpx5.setStyle(normalStyle);
      map.closePopup();
    });
    gpx5.on('click', function(){
      choixarticle(6);
    })
    
    gpx6.on('mouseover', function(e) {
      gpx6.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Bethunes-Olhain')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx6.on('mouseout', function() {
      gpx6.setStyle(normalStyle);
      map.closePopup();
    });
    gpx6.on('click', function(){
      choixarticle(7);
    })
  
    gpx7.on('mouseover', function(e) {
      gpx7.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Olhain-Angres')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx7.on('mouseout', function() {
      gpx7.setStyle(normalStyle);
      map.closePopup();
    });
    gpx7.on('click', function(){
      choixarticle(8);
    })
  
    gpx8.on('mouseover', function(e) {
      gpx8.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Angres-Lens')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx8.on('mouseout', function() {
      gpx8.setStyle(normalStyle);
      map.closePopup();
    });
    gpx8.on('click', function(){
      choixarticle(9);
    })
  
    gpx9.on('mouseover', function(e) {
      gpx9.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Lens-Don')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx9.on('mouseout', function() {
      gpx9.setStyle(normalStyle);
      map.closePopup();
    });
    gpx9.on('click', function(){
      choixarticle(10);
    })
  
    gpx10.on('mouseover', function(e) {
      gpx10.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Don-Lille')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx10.on('mouseout', function() {
      gpx10.setStyle(normalStyle);
      map.closePopup();
    });
    gpx10.on('click', function(){
      choixarticle(11);
    })
  
    gpx11.on('mouseover', function(e) {
      gpx11.setStyle(hoverStyle);
      var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('Lille-Wattrelos')
      .openOn(map);
      var topOffset = -popup.getElement().offsetHeight - 10;
    });
    gpx11.on('mouseout', function() {
      gpx11.setStyle(normalStyle);
      map.closePopup();
    });
    gpx11.on('click', function(){
      choixarticle(12);
    })
  


    function hoveryes0() {
        gpx0.setStyle(hoverStyle);
    };
    function hoverno0() {
        gpx0.setStyle(normalStyle);
    };

    function hoveryes1() {
        gpx1.setStyle(hoverStyle);
    };
    function hoverno1() {
        gpx1.setStyle(normalStyle);
    };

    function hoveryes2() {
        gpx2.setStyle(hoverStyle);
    };
    function hoverno2() {
        gpx2.setStyle(normalStyle);
    };

    function hoveryes3() {
        gpx3.setStyle(hoverStyle);
    };
    function hoverno3() {
        gpx3.setStyle(normalStyle);
    };

    function hoveryes4() {
        gpx4.setStyle(hoverStyle);
    };
    function hoverno4() {
        gpx4.setStyle(normalStyle);
    };

    function hoveryes5() {
        gpx5.setStyle(hoverStyle);
    };
    function hoverno5() {
        gpx5.setStyle(normalStyle);
    };

    function hoveryes6() {
        gpx6.setStyle(hoverStyle);
    };
    function hoverno6() {
        gpx6.setStyle(normalStyle);
    };

    function hoveryes7() {
        gpx7.setStyle(hoverStyle);
    };
    function hoverno7() {
        gpx7.setStyle(normalStyle);
    };

    function hoveryes8() {
        gpx8.setStyle(hoverStyle);
    };
    function hoverno8() {
        gpx8.setStyle(normalStyle);
    };

    function hoveryes9() {
        gpx9.setStyle(hoverStyle);
    };
    function hoverno9() {
        gpx9.setStyle(normalStyle);
    };

    function hoveryes10() {
        gpx10.setStyle(hoverStyle);
    };
    function hoverno10() {
        gpx10.setStyle(normalStyle);
    };

    function hoveryes11() {
        gpx11.setStyle(hoverStyle);
    };
    function hoverno11() {
        gpx11.setStyle(normalStyle);
    };
  
  // Call the initMap function to initialize the map
loadEtapes();
  


function choixarticle(fetchid) { //Oh le bricollage de la fleche c'est un scandale
  let retourarrow = document.createElement('a');
  retourarrow.className = "retourarrow";
  retourarrow.setAttribute('href', 'itineraire.html');
  let imageretour = document.createElement('img');
  imageretour.setAttribute('src','img/arrow.png');
  imageretour.className = 'arrow';
  let integrcontain = document.getElementById('integrcontain');
  let mainhead = document.getElementById('mainhead');
  let planif = document.getElementById('planif');
  let integration = document.createElement('object');
  integration.setAttribute('type', 'text/html');
  integration.setAttribute('data', `trajet.html?id=${fetchid}`);
  integrcontain.removeChild(mainhead);
  integrcontain.removeChild(planif);
  integrcontain.appendChild(integration);
  integrcontain.appendChild(retourarrow);
  retourarrow.appendChild(imageretour);
}


window.addEventListener('message', function(event) {
    var dataFromPage1 = event.data;
    console.log('gpx num:', dataFromPage1);
    dataFromPage1 --;
    newid = "gpx" + dataFromPage1;
    console.log(newid);
    var changecolour = window[newid];
    changecolor();
    returncolor();
    function changecolor() {
      changecolour.setStyle(hoverStyle);
    };
    function returncolor() {
      console.log("ezdez", dataFromPage1);
      if (dataFromPage1 == 11) {
        gpx10.setStyle(normalStyle);
      }
      console.log(dataFromPage1);
      console.log(Number(dataFromPage1 + 1));
      newid = "gpx" + Number(dataFromPage1 + 1);
      console.log(newid);
      console.log(window[newid]);
      let changecolour1 = window[newid];
      console.log("esees", newid);
      changecolour1.setStyle(normalStyle);
      newid = "gpx" + Number(dataFromPage1 - 1)
      console.log("fzerfzecfz", newid)
      let changecolour2 = window[newid];
      changecolour2.setStyle(normalStyle);
    }
})