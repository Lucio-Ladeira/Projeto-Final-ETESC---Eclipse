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

// Lista de produtos
const produtos = [
    {
        imagem: "assets/fotoPerfil/fotoInstaLucio.jpg",
        nome: "Ryzen 7 5700G",
        precoCheio: "R$ 1.299,99",
        precoDesconto: "R$ 999,99",
        precoParcelado: "R$ 1.199,99",
        precoParcela: "R$ 809,80",
        parcelamento: "12",
    },
    {
        imagem: "assets/fotoPerfil/fotoInstaDaviGS.jpg",
        nome: "Ryzen 5 5600GT",
        precoCheio: "R$ 1.299,99",
        precoDesconto: "R$ 999,99",
        precoParcelado: "R$ 1.199,99",
        precoParcela: "R$ 809,80",
        parcelamento: "3"
    },
    {
        imagem: "assets/fotoPerfil/fotoInstaSaimo.jpg",
        nome: "Ryzen 5 5500",
        precoCheio: "R$ 1.299,99",
        precoDesconto: "R$ 999,99",
        precoParcelado: "R$ 1.199,99",
        precoParcela: "R$ 809,80",
        parcelamento: "6"
    },
    {
        imagem: "assets/LEGO_logo.svg.png",
        nome: "Ryzen 3 3200G",
        precoCheio: "R$ 1.299,99",
        precoDesconto: "R$ 999,99",
        precoParcelado: "R$ 1.199,99",
        precoParcela: "R$ 809,80",
        parcelamento: "3"
    }
];

// Recebe elemento
const conteinerVitrine = document.getElementById("conteiner-vitrine");

// Função que repete a div para cada item
produtos.forEach(produto => {
    // Cria a estrutura da div do produto
    const produtoCard = `
        <div class="conteiner-produtos-card">
            <div id="img-produto" style="background-image: url(${produto.imagem}); background-size: cover; width: 220px; height: 220px;"></div>
            <div id="textos-produto">
                <h1>${produto.nome}</h1>
                <h3 style="color:red;">de ${produto.precoCheio} por</h3>
                <h2 style="color:green;">${produto.precoDesconto}</h2>
                <h4 style="color:green;">À vista</h4>
                <h4>15% de desconto no PIX</h4>
                <hr>
                <h2 style="color:green;">${produto.precoParcelado}</h2>
                <h2>Em até ${produto.parcelamento}x de ${produto.precoParcela}</h2>
                <h3>Sem Juros no cartão</h3>
            </div>
        </div>

    `;
    
    // Insere a div criada dentro da vitrine
    conteinerVitrine.innerHTML += produtoCard;
});