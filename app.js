//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = []
let entradaNomeAmigo


function limparEntrada(){
    entrada = document.querySelector('input');
    entrada.value = '';
}


function adicionarAmigo(){
    entradaNomeAmigo = document.querySelector('input')
    if (entradaNomeAmigo.value == "" ){
        alert("Por favor, insira um nome.")
    }else {
        listaAmigos.push(entradaNomeAmigo.value)
        limparEntrada()
        console.log(listaAmigos)
        listaExibicao = document.getElementById('listaAmigos')
        listaExibicao.value= listaAmigos
    }
    

}
