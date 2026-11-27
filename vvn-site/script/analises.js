
/*
    analises.js

    Responsável por:
    - Gerar os filtros de gênero
    - Gerar os filtros de letra inicial
    - Gerar os filtros de estúdio
    - Criar os cards das Visual Novels
    - Carregar o catálogo
*/


// FILTROS

// Gera as opções de gênero
function carregarGeneros() {

    const generos = new Set();

    // Percorre todas as Visual Novels
    visualNovels.forEach(vn => {
        vn.generos.forEach(genero => {
            generos.add(genero);
        });
    });

    const container = document.getElementById("generos-container");

    // Ordena os gêneros alfabeticamente
    const listaGeneros = [...generos].sort();

    listaGeneros.forEach(genero => {

        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "checkbox";
        input.name = "genero";
        input.value = genero;

        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + genero));

        container.appendChild(label);
    });
}


// Gera as opções de estúdio
function carregarEstudios() {

    const estudios = new Set();

    visualNovels.forEach(vn => {

        // O array contém nome e identificador alternadamente
        for (let i = 0; i < vn.desenvolvedor.length; i += 2) {
            estudios.add(vn.desenvolvedor[i]);
        }

    });

    const container = document.getElementById("estudios-container");

    const listaEstudios = [...estudios].sort();

    listaEstudios.forEach(estudio => {

        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "checkbox";
        input.name = "estudio";
        input.value = estudio;

        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + estudio));

        container.appendChild(label);
    });
}


// Gera as opções de letra inicial
function carregarLetras() {

    const container = document.getElementById("letras-container");

    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // Opção para remover o filtro de letra
    const labelTodas = document.createElement("label");
    const inputTodas = document.createElement("input");

    inputTodas.type = "radio";
    inputTodas.name = "letra";
    inputTodas.value = "todas";
    inputTodas.checked = true;

    labelTodas.appendChild(inputTodas);
    labelTodas.appendChild(document.createTextNode(" Todas"));

    container.appendChild(labelTodas);

    // Cria uma opção para cada letra
    letras.forEach(letra => {

        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "letra";
        input.value = letra;

        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + letra));

        container.appendChild(label);
    });
}


// Inicializa os filtros
function iniciarFiltros() {
    carregarGeneros();
    carregarEstudios();
    carregarLetras();
}


// CATÁLOGO


// Gera as estrelas de acordo com a nota
function gerarEstrelas(nota) {

    let estrelas = "";

    for (let i = 0; i < 10; i++) {
        estrelas += i < nota ? "★" : "☆";
    }

    return estrelas;
}


// Cria um card de Visual Novel
function criarCard(vn) {

    
    const link = document.createElement("a");
    link.href = ".."+vn.pagina; // Cria o link

    
    const card = document.createElement("div"); // Cria a div interna

    
    const imagem = document.createElement("img"); // cria a imagem
    imagem.src = "../"+vn.imagem;
    imagem.alt = "Capa de " + vn.titulo;

    const titulo = document.createElement("h4"); // cia o título
    titulo.textContent = vn.titulo;

    const nota = document.createElement("h5"); // Estrelas
    nota.textContent = gerarEstrelas(vn.nota);

    // Montar o card
    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(nota);

    link.appendChild(card);

    return link;
}


// Carrega os cards no catálogo
function carregarCatalogo(lista) {

    const container = document.getElementById("catalogo-container");

    // Limpa os cards anteriores
    container.innerHTML = "";

    lista.forEach(vn => {

        const card = criarCard(vn);

        container.appendChild(card);

    });
}


// Inicializa o catálogo
function iniciarCatalogo() {
    carregarCatalogo(visualNovels);
}


// Aplicar filtros


function aplicarFiltros() {

    // Obtém os gêneros selecionados
    const generosSelecionados = [...document.querySelectorAll(
        'input[name="genero"]:checked'
    )].map(input => input.value);


    // Obtém os estúdios selecionados
    const estudiosSelecionados = [...document.querySelectorAll(
        'input[name="estudio"]:checked'
    )].map(input => input.value);


    // Obtém a letra selecionada
    const letraSelecionada = document.querySelector(
        'input[name="letra"]:checked'
    ).value;


    // Obtém a opção de conteúdo adulto
    const adultoSelecionado = document.querySelector(
        'input[name="adulto"]:checked'
    ).value;


    // Filtra as Visual Novels
    const resultados = visualNovels.filter(vn => {

        // Verifica o gênero
        const correspondeGenero =
            generosSelecionados.length === 0 ||
            vn.generos.some(genero =>
                generosSelecionados.includes(genero)
            );


        // Verifica o estúdio
        const estudiosVN = [];

        for (let i = 0; i < vn.desenvolvedor.length; i += 2) {
            estudiosVN.push(vn.desenvolvedor[i]);
        }

        const correspondeEstudio =
            estudiosSelecionados.length === 0 ||
            estudiosVN.some(estudio =>
                estudiosSelecionados.includes(estudio)
            );


        // Verifica a letra inicial
        const correspondeLetra =
            letraSelecionada === "todas" ||
            vn.titulo.toUpperCase().startsWith(letraSelecionada);


        // Verifica o conteúdo adulto
        const correspondeAdulto =
            adultoSelecionado === "todos" ||
            (adultoSelecionado === "sim" && vn.adulto === true) ||
            (adultoSelecionado === "nao" && vn.adulto === false);


        // A VN precisa atender a todos os filtros
        return correspondeGenero &&
               correspondeEstudio &&
               correspondeLetra &&
               correspondeAdulto;

    });


    // Atualiza o catálogo
    carregarCatalogo(resultados);
}



// ==========================================
// INICIALIZAÇÃO
// ==========================================


function iniciarPagina() {

    iniciarFiltros();
    iniciarCatalogo();

}

iniciarPagina();
