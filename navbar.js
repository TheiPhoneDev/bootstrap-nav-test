const navbarSystem= document.getElementById("navbarSystem");

const templateNavbar = `    
<nav class="navbar navbar-expand-lg bg-warning" id="mainNavbar">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#verticalNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <a class="navbar-brand" href="#">Titolo</a>
  <ul class="navbar-nav flex-row">
    <li class="nav-item" onclick="testButton1()">
      <a class="nav-link mx-2 d-flex flex-column" href="#">
      <i class="bi bi-search mx-auto"></i>
      <span>Cerca</span>
      </a>
    </li>
    <li class="nav-item" onclick="testButton2()">
      <a class="nav-link mx-2 d-flex flex-column" href="#">
        <i class="bi bi-envelope-heart mx-auto"></i>
        <span>Wishlist</span>
      </a>
    </li>
    <li class="nav-item" onclick="testButton3()">
        <a class="nav-link mx-2 d-flex flex-column" href="#">
          <i class="bi bi-door-open mx-auto"></i>
          <span>Accedi</span>
        </a>
    </li>
  </ul>
</div>
</nav>
<!--navbar verticale-->
<nav class="navbar navbar-expand-lg navbar-vertical">
<div class="container-fluid flex-column">
  <div class="collapse navbar-collapse" id="verticalNavbar">
    <ul class="navbar-nav flex-column" id="menuVerticale">
    </ul>
  </div>
</div>
</nav>`;

class NavBar{
    constructor(template, vociMenu){
        this.template = template;
        this.vociMenu =vociMenu;
    }
    aggiungiVociAlMenu(posizione){
        this.vociMenu.forEach(voceMenu => {
            const elementoLi= document.createElement("li");
            elementoLi.className = "nav-item my-2"
            elementoLi.innerHTML =  `<a class="nav-link active" href="${voceMenu.link}">${voceMenu.titolo}</a>` 
            posizione.appendChild(elementoLi)
        });
    }
    montaNavBar(posizione){
        posizione.innerHTML=this.template;
    }
}

const menu = [
    {link:"index.html", titolo:"Home"},
    {link:"shopping-list.html", titolo:"Shopping List"},
    {link:"cards.html", titolo:"Cards"},
    {link:"#", titolo:"Vedremo..."},
];

const navbarTemplate = new NavBar(templateNavbar,menu);

navbarTemplate.montaNavBar(navbarSystem);

const menuVerticale=document.getElementById("menuVerticale")

navbarTemplate.aggiungiVociAlMenu(menuVerticale);
