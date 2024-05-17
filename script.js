const btnTodos = document.querySelector('.todos');
const btnPerifericos = document.querySelector('.perifericos');
const btnImpresoras = document.querySelector('.impresoras');
const btnNotebooks = document.querySelector('.notebooks');
const btnMonitores = document.querySelector('.monitores');
const btnSillasGamer = document.querySelector('.sillasGamer');

const contenedorProductos = document.querySelector('.productos');

document.addEventListener('DOMContentLoaded',()=>{
    productos();
});

const productos = () => {
  let productosArreglo = [];
  const productos = document.querySelectorAll('.producto');

  productos.forEach(
    (producto) => (productosArreglo = [...productosArreglo, producto])
  );

  const perifericos = productosArreglo.filter(
    (periferico) => periferico.getAttribute('data-producto') === 'periferico'
  );
  const impresoras = productosArreglo.filter(
    (impresora) => impresora.getAttribute('data-producto') === 'impresora'
  );
  const notebooks = productosArreglo.filter(
    (notebook) => notebook.getAttribute('data-producto') === 'notebook'
  );
  const monitores = productosArreglo.filter(
    (monitor) => monitor.getAttribute('data-producto') === 'monitor'
  );
  const sillasGamer = productosArreglo.filter(
    (sillaGamer) => sillaGamer.getAttribute('data-producto') === 'sillaGamer'
  );

  mostrarProductos(
    perifericos,
    impresoras,
    notebooks,
    monitores,
    sillasGamer,
    productosArreglo
  );
};

const mostrarProductos = (
  perifericos,
  impresoras,
  notebooks,
  monitores,
  sillasGamer,
  todos
) => {
  btnPerifericos.addEventListener('click', () => {
    limpiarHtml(contenedorProductos);
    perifericos.forEach((periferico) =>
      contenedorProductos.appendChild(periferico)
    );
  });

  btnImpresoras.addEventListener('click', () => {
    limpiarHtml(contenedorProductos);
    impresoras.forEach((impresora) =>
      contenedorProductos.appendChild(impresora)
    );
  });

  btnNotebooks.addEventListener('click', () => {
    limpiarHtml(contenedorProductos);
    notebooks.forEach((notebook) => contenedorProductos.appendChild(notebook));
  });
  btnMonitores.addEventListener('click', () => {
    limpiarHtml(contenedorProductos);
    monitores.forEach((monitor) => contenedorProductos.appendChild(monitor));
  });
  btnSillasGamer.addEventListener('click', () => {
    limpiarHtml(contenedorProductos);
    sillasGamer.forEach((sillaGamer) =>
      contenedorProductos.appendChild(sillaGamer)
    );
  });
  btnTodos.addEventListener('click', () => {
    limpiarHtml(contenedorProductos);
    todos.forEach((todo) => contenedorProductos.appendChild(todo));
  });
};

const limpiarHtml = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};


function redireccionar(){
  window.location.href="./productos.html";
}

function redireccionarContacto(){
  window.location.href="./contacto.html";

}