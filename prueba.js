const productoPeriferico = document.getElementsByClassName("periferico");
const productoImpresora = document.getElementsByClassName("impresora");
const productoNotebook = document.getElementsByClassName("notebook");
const productoMonitor = document.getElementsByClassName("monitor");
const productoSillaGamer = document.getElementsByClassName("sillaGamer");
const productos = document.getElementsByClassName("producto");

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
