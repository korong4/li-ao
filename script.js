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

const formulario = document.querySelector(".formulario");

formulario.addEventListener('submit',function(evento){
    evento.preventDefalut();
    const novoTitulo = documento.getElementsById('raca').value;
    const novoImagem = documento.getElementsById('imagem').value;
    const novoApp = documento.getElementsById('app').value;
})
