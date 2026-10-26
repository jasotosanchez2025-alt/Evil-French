// 1. Seleccionamos la imagen de la página
const imagen = document.querySelector('img');

// 2. Escuchamos el evento de hacer clic
imagen.addEventListener('click', () => {
    
    // Creamos un nuevo elemento de texto en el aire
    const mensaje = document.createElement('p');
    
    // Escribe aquí lo que quieras que diga la imagen al hacerle clic:
    mensaje.textContent = "Dangerous French, DO NOT TOUCH";
    
    // Le añadimos una clase de estilos que crearemos en el CSS
    mensaje.classList.add('texto-alerta');
    
    // Agregamos el mensaje al cuerpo de la página
    document.body.appendChild(mensaje);
    
    // Borramos el mensaje automáticamente después de 3 segundos para que no se acumulen
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
});

