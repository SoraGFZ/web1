document.addEventListener("DOMContentLoaded", function() {
        const mensaje = document.getElementById("mensaje");
            const nombre = document.getElementById("nombre");
                mensaje.textContent = "Te quiero";
                    nombre.textContent = "Rocío";
                        setTimeout(function() {
                                mensaje.textContent = "Perdón por todo";
                                    }, 3000);
                                    });