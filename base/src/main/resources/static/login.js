document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    if (!/^[a-zA-Z]{4,}$/.test(nombre)) {
        alert("El nombre deben contener solo letras y tener al menos 4 caracteres.");
        return;
    }
    xhr.onload = function() {
        if (xhr.status === 200) {
            window.location.href = "perfil.html";
        } else {
            document.getElementById("mensajeError").textContent = "Usuario o contraseña incorrectos";
        }
    };
    xhr.send("nombre=" + encodeURIComponent(nombre) + "&password=" + encodeURIComponent(password));
});
