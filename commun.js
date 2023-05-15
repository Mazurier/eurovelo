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



var navvar='';

function nav(){

return `
<img src="img/menu2.png" alt="" class="navbaricon" onclick="navbar()">
        <div class="navbarmain">
            <div class="navbarlinks">
                <a href="index.html">Accueil</a>
                <a href="">L'itinéraire</a>
                <a href="">Témoignages</a>
                <a href="">Infos Pratiques</a>
                <a href="">Suggestions</a>
                <a href="">Inspirations</a>
                <a href="">Actualités</a>
                <a href="">PASSEPORT</a>
            </div>
            <div class="navbartrait"></div>
            <div class="navbarlinkfin">
                Espace pro
            </div>
            <div class="navbartrait"></div>
            <div class="navbarlinkfin">
                Carnet de voyage
            </div>
            <div class="navbartrait"></div>
            <div class="navbarlinkfin">
                Espace personel
            </div>
            <div class="navbartrait"></div>
            <a href=""><span class="navbarnews">S'abonner a la newsletter</span></a>
        </div>

`

}


document.getElementById("navbar").innerHTML=nav();


let headernav = '';

function headernavbar() {
    return `
    <div id="navlink">
            <img src="img/menu.png" class="burgermenu" onclick="navbar()">
            
        </div>
        <img src="img/logoheader.png" alt="" class="logoheader">
            <img src="img/search.png" alt="" class="headersearchicon">
    `
};

document.getElementById("headerphone").innerHTML=headernavbar();