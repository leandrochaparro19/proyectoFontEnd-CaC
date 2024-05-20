const productoPeriferico = document.getElementsByClassName("periferico");
const productoImpresora = document.getElementsByClassName("impresora");
const productoNotebook = document.getElementsByClassName("notebook");
const productoMonitor = document.getElementsByClassName("monitor");
const productoSillaGamer = document.getElementsByClassName("sillaGamer");
const productos = document.getElementsByClassName("producto");

const btnPeriferico = document.getElementById("perifericos");

function mostrarPerifericos() {
  for (const elemento of productos) {
    elemento.style.display = "none";
  }
  for (const elemento of productoPeriferico) {
    elemento.style.display = "flex";
  }
}
function mostrarImpresoras() {
  for (const elemento of productos) {
    elemento.style.display = "none";
  }

  for (const elemento of productoImpresora) {
    elemento.style.display = "flex";
  }
}
function mostrarNotebooks() {
  for (const elemento of productos) {
    elemento.style.display = "none";
  }
  for (const elemento of productoNotebook) {
    elemento.style.display = "flex";
  }
}
function mostrarMonitores() {
  for (const elemento of productos) {
    elemento.style.display = "none";
  }
  for (const elemento of productoMonitor) {
    elemento.style.display = "flex";
  }
  for (const elemento of productoSillaGamer) {
    elemento.style.display = "none";
  }
  for (const elemento of productoPeriferico) {
    elemento.style.display = "none";
  }
}
function mostrarSillasGamers() {
  for (const elemento of productos) {
    elemento.style.display = "none";
  }
  for (const elemento of productoSillaGamer) {
    elemento.style.display = "flex";
  }
}

function mostrarTodo() {
  for (const elemento of productos) {
    elemento.style.display = "flex";
  }
}

//No me funciono el redireccionamiento directamente desde la pagina de inicio al tipo de producto que se seleccione, siempre me manda a todos
// dejo igualmente lo que intente hacer aca abajo, lo probe de 2 formas y hasta cambie la forma en la que mostraba los productos para hacerlo con funciones separadas y aun asi no funciono
function redireccionarPerifericos() {
  window.location.href = "./productos.html";
  mostrarPerifericos();
}
function redireccionarMonitores() {
  window.location.href = "./productos.html";
  mostrarMonitores();
}
function redireccionarNotebooks() {
  window.location.href = "./productos.html";
  mostrarNotebooks();
}
function redireccionarSillasGamers() {
  window.location.href = "./productos.html";
  mostrarSillasGamers();
}
function redireccionarImpresoras() {
  window.location.href = "./productos.html";
  mostrarImpresoras();
}

function redireccionarContacto() {
  window.location.href = "./contacto.html";
}

// Formulario validacion

const formularioContacto = document.querySelector("#formularioContacto");

const validarFormulario = (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#correo");
  const telefono = document.querySelector("#telefono");
  const textArea = document.querySelector("#mensaje");
  let validation = true;

  if (nombre.value.trim() === "") {
    nombre.classList.add("error");
    document.querySelector("#error-nombre").textContent =
      "Debe completar el campo Nombre";
    validation = false;
  }
  if (email.value.trim() === "") {
    document.querySelector("#error-email").textContent =
      "Debe completar el campo Email";
    email.classList.add("error");
    validation = false;
  }
  if (telefono.value.trim() === "") {
    document.querySelector("#error-telefono").textContent =
      "Debe completar el campo Telefono";
    email.classList.add("error");
    validation = false;
  }
  if (textArea.value.trim() === "") {
    document.querySelector("#error-textArea").textContent =
      "Debe completar el campo con un mensaje";
    email.classList.add("error");
    validation = false;
  }

  if (validation) {
    formularioContacto.submit();
  } else {
    return false;
  }
};

formularioContacto.addEventListener("submit", validarFormulario);
