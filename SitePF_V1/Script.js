function switchTheme() {
    const body = document.getElementById("body")
    if (body.classList.contains("tema-dark") ) {
        body.classList.replace("tema-dark", "tema-light")
    } else if (body.classList.contains("tema-light") ) {
        body.classList.replace("tema-light", "tema-dark")
    }
}

const botao = document.getElementById("perfilBtn");
const menu = document.getElementById("menuPerfil");

botao.addEventListener("click", () => {
    menu.style.display =
        menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function(event) {
    if (!event.target.closest(".perfil")) {
        menu.style.display = "none";
    }
});