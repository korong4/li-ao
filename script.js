function alterarFundo() {
    let cor = document.body.style.backgroundColor;

    if (cor === "black") {
        document.body.style.backgroundColor = "white";
        document.querySelector('p').style.color = "black";
    } 
    else {
        document.body.style.backgroundColor = "black";
        document.querySelector('p').style.color = "white";
    }
}
function criarCard(obj) {
    const coletion = document.getElementById('colecao');

    const card = document.createElement('div');

    card.innerHTML = `
        <h2>${obj.titulo}</h2>
        <img src="${obj.imagem}" width='200'>
        <p>${obj.desc}</p>
    `;
    coletion.appendChild(card);
}

/* =========================
   LOCAL STORAGE
========================= */

// verifica se já existe algo salvo
let galeria = JSON.parse(localStorage.getItem('galeria')) || [];
// recria os cards salvos ao carregar a página
galeria.forEach(item => {
    criarCard(item);
});

/* =========================
   EXEMPLO DO X
========================= */

let n = 25;

for (let i = 0; i < n; i++) {
    let linha = "";
    for (let j = 0; j < n; j++) {

        if (i + j == n - 1) {
            linha += "X";
        }
        else if (i == j) {
            linha += "X";
        }
        else {
            linha += " ";
        }
    }

    console.log(linha);
}

/* =========================
   FORMULÁRIO
========================= */

const formulario = document.querySelector('.formulario');

console.log(formulario);

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const novoTitulo = document.getElementById('raca').value;
    const novoImagem = document.getElementById('imagem').value;
    const novoDesc = document.getElementById('desc').value;
    const novoApp = document.getElementById('app').checked;
    const novo = {
        titulo: novoTitulo,
        imagem: novoImagem,
        app: novoApp,
        desc: novoDesc
    };

    // adiciona no array
    galeria.push(novo);
    // salva no LocalStorage
    localStorage.setItem('galeria', JSON.stringify(galeria));
    // cria o card na tela
    criarCard(novo);
    // limpa o formulário (opcional)
    formulario.reset();
});