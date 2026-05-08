function alterarFundo(){
    let cor = document.body.style.backgroundColor;
    if (cor ===  "black"){
        document.body.style.backgroundColor = "white";
        document.querySelector('p').style.color = "black";
    } 
    else{
        document.body.style.backgroundColor = "black";
        document.querySelector('p').style.color = "white";
    } 
}

function criarCard(obj){
    const coletion = document.getElementById('colecao');

    const card = document.createElement('div');

    card.innerHTML = `
        <h2>${obj.titulo}</h2>
        <img src="${obj.imagem}" width='200'>
        <p>${obj.desc}</p>
    `;
    coletion.appendChild(card);
}

let n = 25;
for (let i=0;i<n;i++){
    let linha = "";
    for (let j=0;j<n;j++){
        if (i+j == n-1){
            linha += "X";
        }
        else if (i == j){
            linha += "X";
        }
        else{
            linha += " ";
        }
    }
    console.log(linha);
}

const formulario = document.querySelector('.formulario'); /* essa linha cria uma variavel constante (não pode mudar ao longo do codigo), que esta sendo atribuido o  
priemeiro elemento com class 'formulario' dentro do codigo HTML  */
console.log(formulario);

formulario.addEventListener('submit',function(evento){   // adiciona um evento ao formulário que dispara quando ele é enviado
    evento.preventDefault(); // impede o comportamento padrão 
    const novoTitulo = document.getElementById('raca').value; // pega o elemento do HTML com ID "raca"
    const novoImagem = document.getElementById('imagem').value; // pega o elemento do HTML com ID "imagem"
    const novoDesc = document.getElementById('desc').value;
    const novoApp = document.getElementById('app').checked; // pega o elemento do HTML com ID "app"

    const novo = { // essa estrutura está criando um obejto com 3 atributos
        titulo : novoTitulo,
        imagem : novoImagem,
        app : novoApp,
        desc : novoDesc
    };
    criarCard(novo);
})
