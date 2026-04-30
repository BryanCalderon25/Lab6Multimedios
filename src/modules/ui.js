import { getTareas, toggleTarea, eliminarTarea } from "./task.js";

export function render(lista, contador) {
  lista.innerHTML = "";

  const tareas = getTareas();
  let pendientes = 0;

  tareas.forEach(tarea => {
    const li = document.createElement("li");

    if (tarea.completada) {
      li.classList.add("completada");
    } else {
      pendientes++;
    }

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = tarea.completada ? "Deshacer" : "Completar";
    btnCompletar.classList.add("btn-completar");

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");

    btnCompletar.addEventListener("click", () => {
      toggleTarea(tarea.id);
      render(lista, contador);
    });

    btnEliminar.addEventListener("click", () => {
      eliminarTarea(tarea.id);
      render(lista, contador);
    });

    li.append(span, btnCompletar, btnEliminar);
    lista.append(li);
  });

  contador.textContent = pendientes;
}