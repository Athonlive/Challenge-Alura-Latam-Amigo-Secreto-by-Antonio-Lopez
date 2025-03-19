// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

 if (!nombre ||nombre === "") {
    alert("Por favor, ingrese un nombre valido");
    return;
 }

    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;
    if (!regex.test(nombre)) {
        alert("Por favor, ingresa un nombre válido donde solo tengan (letras mayusculas, minusculas acento sin acento y espacios).");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay suficientes amigos en la lista para realizar el sorteo.");
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indexAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Manejo de evento
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.button-add').addEventListener("click", agregarAmigo);
    document.querySelector('.button-draw').addEventListener("click", sortearAmigo);
});