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

const formulario = document.querySelector(".formulario"); /* essa linha cria uma variavel constante (não pode mudar ao longo do codigo), que esta sendo atribuido o  
  priemeiro elemento com class 'formulario' dentro do codigo HTML  */

formulario.addEventListener('submit',function(evento){   // adiciona um evento ao formulário que dispara quando ele é enviado
    evento.preventDefalut(); // impede o comportamento padrão 
    const novoTitulo = documento.getElementsById('raca').value; // pega o elemento do HTML com ID "raca"
    const novoImagem = documento.getElementsById('imagem').value; // pega o elemento do HTML com ID "imagem"
    const novoApp = documento.getElementsById('app').value; // pega o elemento do HTML com ID "app"

    const novo = { // essa estrutura está criando um obejto com 3 atributos
        titilo : novoTitulo,
        imagem : novoImagem,
        app : novoApp
    };
})
