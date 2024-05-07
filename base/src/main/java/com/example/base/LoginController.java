package com.example.base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public String login(String nombre, String password, Model model) {
        Usuario usuario = usuarioRepository.findByNombre(nombre);
        if (usuario != null && usuario.getPassword().equals(password)) {
            model.addAttribute("usuario", usuario); // Envía el usuario a la página HTML
            return "redirect:/perfil.html"; // Redirecciona a la página del perfil del usuario
        } else {
            model.addAttribute("error", "Usuario o contraseña incorrectos");
            return "login";
        }
    }
}
