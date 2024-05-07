// Obtener los datos del usuario del modelo enviado desde el controlador
var usuario = JSON.parse("/*[[${usuario}]]*/");

// Mostrar los datos del usuario en la página
document.getElementById('datosUsuario').innerHTML = `
<p><strong>Nombre:</strong> ${usuario.nombre}</p>
<p><strong>Apellido:</strong> ${usuario.apellido}</p>
<p><strong>Email:</strong> ${usuario.email}</p>
<p><strong>Entrada:</strong> ${usuario.entrada}</p>
<p><strong>Salida:</strong> ${usuario.salida}</p>
<p><strong>Placa:</strong> ${usuario.placa}</p>
`;