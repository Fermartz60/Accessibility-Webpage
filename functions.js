//Modo oscuro

  const botonModo = document.getElementById("modo-toggle");
  const cuerpo = document.body;

  // Verificar preferencia guardada
  if (localStorage.getItem("modo") === "oscuro") {
    cuerpo.classList.add("modo-oscuro");
    botonModo.textContent = "☀️ Modo claro";
    botonModo.setAttribute("aria-label", "Cambiar a modo claro");
  }

  botonModo.addEventListener("click", () => {
    cuerpo.classList.toggle("modo-oscuro");

    const esOscuro = cuerpo.classList.contains("modo-oscuro");
    botonModo.textContent = esOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    botonModo.setAttribute(
      "aria-label",
      esOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );

    localStorage.setItem("modo", esOscuro ? "oscuro" : "claro");
  });

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contacto");
    const estado = document.getElementById("mensaje-estado");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita recargar la página por ahora

        // Aquí podrías agregar lógica para enviar por backend si lo necesitas

        // Mensaje accesible
        estado.textContent = "Tu mensaje ha sido enviado correctamente.";

        // Limpia el formulario
        form.reset();

        // Opcional: eliminar mensaje después de unos segundos
        setTimeout(() => {
            estado.textContent = "";
        }, 8000);
    });
});


