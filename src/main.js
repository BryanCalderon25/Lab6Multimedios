console.log("MAIN CARGADO");
import { agregarTarea } from "./modules/task.js";
import { render } from "./modules/ui.js";

const txtTarea = document.querySelector("#txtTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");
const mensaje = document.querySelector("#mensaje");

function validarTarea(texto) {
  return texto.trim() !== "";
}

function handleAgregar() {
  const texto = txtTarea.value.trim();

  if (!validarTarea(texto)) {
    mensaje.textContent = "Debe ingresar una tarea válida";
    return;
  }

  mensaje.textContent = "";

  agregarTarea(texto);
  txtTarea.value = "";

  render(lista, contador);
}

btnAgregar.addEventListener("click", handleAgregar);

txtTarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleAgregar();
  }
});

// 🔥 CLAVE: carga datos guardados
render(lista, contador);