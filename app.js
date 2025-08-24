// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Aqui almacenamos los nombres
let amigos = [];

// Agregamos un nombre
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value;

  // Validacion espacio vacio
  if (nombre.length === "") {
    alert("El nombre no puede estar vacio.");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
}

// Aqui mostramos la lista de amigos
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Sorteo
function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("Se debe ingresar al menos un nombre para el sorteo.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let seleccionado = amigos[indice];

  let li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${seleccionado}`;
  resultado.appendChild(li);
}
