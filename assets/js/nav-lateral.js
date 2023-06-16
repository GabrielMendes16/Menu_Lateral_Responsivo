const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".container-lateral");
const logoMarca = document.querySelector(".logo-marca");
const nomeDaMarca = document.querySelector(".nome-da-marca");
const tituloSuaConta = document.querySelector(".titulo-sua-conta");
const textoLink = document.querySelectorAll(".texto-link");


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    logoMarca.classList.toggle('active');
    tituloSuaConta.classList.toggle('active');
    nomeDaMarca.classList.toggle('active');



    textoLink.forEach(textoLink => {
        textoLink.classList.toggle('active');
    })



});
