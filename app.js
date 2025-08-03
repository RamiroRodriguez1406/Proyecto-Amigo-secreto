// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarAmigos();
    input.value = ""; // Limpiar input
    input.focus();    // Poner foco nuevamente
}

// Mostrar nombres en la lista
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar antes de volver a mostrar

    amigos.forEach((nombre) => {
        const item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    if (amigos.length === 0) {
        alert("Debes agregar al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    const item = document.createElement("li");
    item.textContent = `¡El amigo secreto es: ${nombreSorteado}! 🎉`;
    resultado.appendChild(item);
}