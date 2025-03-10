//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = []
let entradaNomeAmigo
let exibirNomeAmigo
let indiceAleatorio
let nomeSorteado

function limparEntrada(){
    entrada = document.querySelector('input');
    entrada.value = '';
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de recriá-la
    
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function limpaSorteio(){
    nomeSorteado = document.getElementById('resultado')
    nomeSorteado.innerHTML= ""
}

function limpaLista (){
    listaAmigos = []
    atualizarLista()
}

function adicionarAmigo(){
    limpaSorteio()
    entradaNomeAmigo = document.querySelector('input')
    if (entradaNomeAmigo.value == "" ){
        alert("Por favor, insira um nome.")
        limparEntrada()
    }else {
        listaAmigos.push(entradaNomeAmigo.value)
        limparEntrada()
        listaExibicao = document.getElementById('listaAmigos')
        listaExibicao.value= listaAmigos
        atualizarLista()
    }
}
function sortearAmigo(){
    if(listaAmigos.length == 0){
        alert("Por favor, insira um nome.")
    }else {
        indiceAleatorio = Math.random() * listaAmigos.length
        nomeSorteado = document.getElementById('resultado')
        nomeSorteado.innerHTML= listaAmigos[Math.floor(indiceAleatorio)]
        limpaLista ()
    }
}