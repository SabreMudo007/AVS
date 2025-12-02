const btn = document.getElementById("abrirPopup");
const popup = document.getElementById("popup");
const fechar = document.querySelector(".fechar");

btn.addEventListener("click", () => {
  popup.style.display = "flex";
});

fechar.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.style.display = "none";
  }
});

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  if(nome === "" || email === "" || telefone ===""){
    alert("Preencha todos os campos!");
  } else {
    alert("Está tudo OK obrigado por participar no evento");
    popup.style.display = "none";
  };
});


