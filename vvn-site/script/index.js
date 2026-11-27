
// Gera as estrelas de acordo com a nota
function gerarEstrelas(nota) {
    let estrelas = "";

    for (let i = 0; i < 10; i++) {
        estrelas += i < nota ? "★" : "☆";
    }

    return estrelas;
}


function preencherCard(vn, id) { 

    const card = document.getElementById(id);
    const link = card.parentElement;

    link.href = "."+vn.pagina;

    const imagem = card.querySelector("img");
    imagem.src = "./"+vn.imagem;
    imagem.alt = "Imagem de " + vn.titulo;

    card.querySelector("h4").textContent = vn.titulo;

    card.querySelector("h5").textContent = gerarEstrelas(vn.nota);
}

function carregarUltimasAnalises() {

    const ultimas = [...visualNovels]
        .sort((a, b) =>
            new Date(b.data_analise) - new Date(a.data_analise)
        )
        .slice(0, 4);

    for (let i = 0; i < ultimas.length; i++) {
        preencherCard(ultimas[i], "uanalise" + (i + 1));
    }
}


// Carrega as quatro melhores Visual Novels
function carregarMelhoresVN() {

    const melhores = [...visualNovels]
        .sort((a, b) => b.nota - a.nota)
        .slice(0, 4);

    for (let i = 0; i < melhores.length; i++) {
        preencherCard(melhores[i], "melhorvn" + (i + 1));
    }
}


// Inicialização
carregarUltimasAnalises();
carregarMelhoresVN();
