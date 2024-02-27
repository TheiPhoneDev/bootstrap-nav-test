const requestURL="https://jsonplaceholder.typicode.com/photos/50"
const recuperaDati =document.getElementById("recuperaDati")
const cards =document.getElementById("cards")

//fetch(requestURL)
//      .then(response => response.json())
//      .then(json => console.log(json))

const recuperafoto= async () => {
    const rispostaGrezza = await fetch(requestURL);
    const rispostaPulita = await rispostaGrezza.json()
    creaCard(rispostaPulita);
}

const creaCard = (elemento) =>{
    if(elemento.length >1){
        elemento.forEach( (elem) => {
           renderizzaTemplateCard(elem)
        });
    }
    else{
        renderizzaTemplateCard(elemento)
    cards.innerHTML += cardTeamplate;
    }
};

recuperaDati.addEventListener("click", recuperafoto);

const renderizzaTemplateCard = (elemento) => {

    const cardTeamplate = `
        <div class="col-lg-3 m-2"></div>
    <div class="card">
            <img src="${elemento.thumbnailURL}" class="card-img-top" alt="${elemento.title}">
        <div class="card-body">
            <p class="card-text">${elemento.title}.</p>
        </div>
    </div>
    </div>
    `;

}
