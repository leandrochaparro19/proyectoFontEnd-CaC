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
