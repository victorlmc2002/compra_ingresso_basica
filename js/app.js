let listaQuantidade = [100, 200, 400];
function comprar(){

    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeIngresso = parseInt(document.getElementById("qtd").value);
    diminuiOutputIngresso(tipoIngresso, quantidadeIngresso);
    document.getElementById("qtd").value = 0;

}

function diminuiOutputIngresso(ingresso, quantidadeIngresso){
    let quantidadeTexto = document.getElementById("qtd-" + ingresso);

    if( ingresso == "pista"){
        if(verificaDisponiblidade(0, ingresso)){
            return;
        }
        mudaIngresso(quantidadeIngresso, quantidadeTexto, 0);
    }
    else if(ingresso == "superior"){
        if(verificaDisponiblidade(1, ingresso)){
            return;
        }
        mudaIngresso(quantidadeIngresso, quantidadeTexto, 1);
    }
    else{
        if(verificaDisponiblidade(2, quantidadeIngresso)){
            return;
        }
        mudaIngresso(quantidadeIngresso, quantidadeTexto, 2);
    }
}

function verificaDisponiblidade(tipo, quantidade){

    if(listaQuantidade[tipo] - quantidade <= 0){
        let disponibilidade = document.querySelector("h2");
        disponibilidade.innerHTML = "Quantidade indisponível";
        console.log("Indisponivel")
        return 1;
    }
    else{
        let disponibilidade = document.querySelector("h2");
        disponibilidade.innerHTML = "Quantidade disponível";
    }

}
function mudaIngresso(quantidadeIngresso, quantidadeTexto, tipo){

    listaQuantidade[tipo] = listaQuantidade[tipo] - quantidadeIngresso;
    quantidadeTexto.textContent = listaQuantidade[tipo];

}
