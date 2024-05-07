
function guardarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var password = document.getElementById("password").value.trim();
    var email = document.getElementById("email").value.trim();
    var entrada = document.getElementById("entrada").value.trim();
    var salida = document.getElementById("salida").value.trim();
    var placa = document.getElementById("placa").value.trim();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/registro");
    xhr.setRequestHeader("Content-Type", "application/json");
    if (!/^[a-zA-Z]{4,6}$/.test(placa)) {
        alert("la placa debe contener minimo 4 caracteres y maximo 6 carecteres.");
        return;
    }
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Redirigir a la página de inicio de sesión después de un registro exitoso
            window.location.href = "login.html";
        } else {
            document.getElementById("mensajeError").textContent = "No registrado correctamente";
        }
    };

    var data = JSON.stringify({
        "nombre": nombre,
        "apellido": apellido,
        "password": password,
        "email": email,
        "entrada": entrada,
        "salida": salida,
        "placa": placa,
    });
    xhr.send(data);
}

