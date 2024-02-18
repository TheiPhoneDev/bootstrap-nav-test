const shoppingList = document.getElementById("shoppingList");

const aggiuntaElemento = document.getElementById("aggiuntaElemento");

aggiuntaElemento.addEventListener("keydown", function(e) {
  if(e.key === "Enter" && e.target.value.trim()) {
    creaElemento(e.target.value)
    e.target.value = "";
  }
})


shoppingList.addEventListener("click", (e) => {
  if(e.target.classList.contains("cestino")) {
    e.target.parentElement.remove();
  }
})


const creaElemento = (element) => {
  const listElement = document.createElement("li")
  listElement.className = "list-group-item d-flex justify-content-between";
  listElement.innerHTML = `<span>${element}</span><i class="bi bi-trash3 cestino"></i>`;
  shoppingList.appendChild(listElement);
}



function testButton1() {
      console.log("Test ciclo while, print numeri da 1 a 100");
      let i=1;

      while(i<=100) {
        console.log(i);
        i++;
      }

      console.log("-------------------------------------------");

    }





    function testButton2() {
      console.log("Test ciclo for, print numeri da 1 a 100");
      for(let i=1;i<=100;i++) {
        console.log(i);
      }

      console.log("-------------------------------------------");
    }




    function testButton3() {
      console.log("Test console log, error e warn, messaggio da printare => nome e cognome");
      console.log("-------------------------------------------");
      let nome = "Pietro";
      let cognome = "Gambatesa";
      let stringToPrint = nome+" "+cognome;
      console.log(stringToPrint);
      console.error(stringToPrint);
      console.warn(stringToPrint);
    }
