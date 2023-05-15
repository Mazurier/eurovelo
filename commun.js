var headervar='';

function header(){

return `
<div class="headerhead" id="headhead">
    <div class="headergauche">
        <a href="https://instagram.com" class="headerreseauxplace">
            <img src="img/insta.png" alt="" class="headerreseauximg">
        </a>
        <a href="https://youtube.com" class="headerreseauxplace">
            <img src="img/youtube.png" alt="" class="headerreseauximg">
        </a>
        <a href="https://facebook.com" class="headerreseauxplace">
            <img src="img/facebook.png" alt="" class="headerreseauximg">
        </a>
        <div class="headernewsletter">
            <label for="newsletter">S'abonner a la neswsletter</label>
            <form class="headerinputnewsletter">
                <input type="text" name="newsletter" id="newsletter" class="headerinputtext" placeholder="Votre adresse email">
                <button type="submit">JE M'INSCRIS</button>
            </form>
        </div>
    </div>
    <div class="headerdroite">
        <div class="headerdroiteelement">
            <a href="redirection.html" class="headertoprightlink">Espace pro</a>
        </div>
        <div class="headerdroiteelement">
            <a href="redirection.html" class="headertoprightlink">Carnet de voyage</a>
        </div>
        <div class="headerdroiteelement">
            <a href="redirection.html" class="headertoprightlink">Espace personnel</a>
        </div>
        <div class="headerdroiteelement">
            <img src="img/flagFR.png" alt="drapeau FR" class="headerlangueflag">
        </div>
    </div>
</div>
<div class="headerfoot" id="headfoot">
    <div class="headergauche">
        <div class="headerlogoplace">
            <img src="img/logoheader.png" alt="logo velodysee" class="headerlogo">
        </div>
        <div class="headerlinks">
            <div class="headerlink">
                <a href="">L'ITINÉRAIRE</a>
            </div>
            <div class="headerlink">
                <a href="">TÉMOIGNAGES</a>
            </div>
            <div class="headerlink">
                <a href="">INFOS PRATIQUES</a>
            </div>
            <div class="headerlink">
                <a href="">SUGGESTIONS</a>
            </div>
            <div class="headerlink">
                <a href="">INSPIRATIONS</a>
            </div>
            <div class="headerlink">
                <a href="" id="headeractu">ACTUALITÉS</a>
                <img src="img/phylactère.png" alt="actualités">
            </div>
            <div class="headerlink">
                <a href="" id="headerpassport">PASSEPORT</a>
                <img src="img/map.png" alt="passeport">
            </div>
        </div>
    </div>
    <div class="headerdroite">
        <a href="">
            <img src="img/search.png" alt="" class="headersearchicon">
        </a>
    </div>
</div>
`

}


document.getElementById("header").innerHTML=header();


/*
var navlinkvar='';

function navlink(){

return `
<a href="javascript:void(0);" onclick="navbar()">
        <img src="img/menu.png" class="phonemenu">
        <i class="fa fa-bars"></i> <!-- Fuck yeah navbar working holy shit-->
    </a>
    <div class="links" id="links">
        <a href="staff.html">
            <div class="phonenav">
                Staff
            </div>
        </a>
        <a href="futureplan.html">
            <div class="phonenav">
                What's planned
            </div>
        </a>
        <a href="info.html">
            <div class="phonenav">
                Informations
            </div>
        </a>
        <a href="discord.html">
            <div class="phonenav">
                Discord servers
            </div>
        </a>
        <a href="newsletter.html">
            <div class="phonenav">
                Newsletter
            </div>
        </a>
    </div>
`

}

navlinkvar = navlinkvar + navlink() 

document.getElementById("navlink").innerHTML=navlinkvar






function navbar() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  */