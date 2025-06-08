const formulario = document.getElementById("formulario-tramite");
const mensajeEstado = document.getElementById("mensaje-estado");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipoTramite = document.getElementById("tipo-tramite").value;

    // Simulación ML: prioridad del trámite (modelo simplificado)
    const prioridad = tipoTramite === "servicio" ? 0.9 : tipoTramite === "licencia" ? 0.6 : 0.3;

    // Simulación de análisis y respuesta del sistema
    if (prioridad > 0.8) {
        mensajeEstado.textContent = `Trámite prioritario procesado rápidamente para ${nombre}`;
    } else if (prioridad > 0.5) {
        mensajeEstado.textContent = `Trámite en proceso para ${nombre}, notificación enviada.`;
    } else {
        mensajeEstado.textContent = `Trámite en cola. Se notificará a ${nombre} cuando esté listo.`;
    }

    alert("Formulario enviado y procesado por sistema automatizado.");
});
