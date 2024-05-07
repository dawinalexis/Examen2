package com.example.base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistroController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/registro")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        // Aquí puedes agregar validaciones adicionales si lo necesitas.
        // Por ejemplo, verificar si el usuario ya existe en la base de datos.

        Usuario usuarioExistente = usuarioRepository.findByNombre(usuario.getNombre());
        if (usuarioExistente != null) {
            return ResponseEntity.badRequest().body("El nombre de usuario ya está en uso.");
        }

        // Si todo está bien, guardamos el nuevo usuario en la base de datos.
        Usuario nuevoUsuario = usuarioRepository.save(usuario);

        // Devolvemos una respuesta exitosa.
        return ResponseEntity.ok(nuevoUsuario);

    }
}

