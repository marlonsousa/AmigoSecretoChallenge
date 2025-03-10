//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = []
let entradaNomeAmigo
let exibirNomeAmigo

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

function adicionarAmigo(){
    entradaNomeAmigo = document.querySelector('input')
    if (entradaNomeAmigo.value == "" ){
        alert("Por favor, insira um nome.")
        limparEntrada()
    }else {
        listaAmigos.push(entradaNomeAmigo.value)
        limparEntrada()
        console.log(listaAmigos)
        listaExibicao = document.getElementById('listaAmigos')
        listaExibicao.value= listaAmigos
        atualizarLista()
    }
    

}
