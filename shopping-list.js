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
