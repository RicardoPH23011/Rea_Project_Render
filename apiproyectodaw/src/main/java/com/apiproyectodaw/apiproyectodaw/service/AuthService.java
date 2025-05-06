package com.apiproyectodaw.apiproyectodaw.service;

import com.apiproyectodaw.apiproyectodaw.dto.*;
import com.apiproyectodaw.apiproyectodaw.model.User;
import com.apiproyectodaw.apiproyectodaw.repository.UserRepository;
import com.apiproyectodaw.apiproyectodaw.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public String register(RegisterRequest request) {
        User user = User.builder()
                .nombre(request.getNombre())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .rol(request.getRol())
                .build();

        // Check if the email already exists in the database
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            // Return a json response with error message
            return "{ \"message\": \"El correo electrónico ya está en uso\", \"error\": true }";
        } else {
            userRepository.save(user);

            if (userRepository.save(user) != null) {
                // Return a json response with success message
                return "{ \"message\": \"Usuario registrado exitosamente\", \"error\": false }";
            } else {
                return "{ \"message\": \"Error al registrar el usuario\", \"error\": true }";
            }
        }

    }

    public AuthResponse login(AuthRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isPresent() && passwordEncoder.matches(request.getPassword(), userOpt.get().getPassword())) {
            String token = jwtUtil.generateToken(request.getEmail(), userOpt.get().getRol(), userOpt.get().getNombre());
            return new AuthResponse(token);
        } else {
            // Return a json response with error message
            return new AuthResponse("{ \"message\": \"Credenciales inválidas\", \"error\": true }");
        }
    }

    public String edit(Long id, User user) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            User updatedUser = existingUser.get();
            updatedUser.setNombre(user.getNombre());
            updatedUser.setEmail(user.getEmail());
            updatedUser.setPassword(passwordEncoder.encode(user.getPassword()));
            updatedUser.setRol(user.getRol());
            userRepository.save(updatedUser);
            return "{ \"message\": \"Usuario actualizado exitosamente\", \"error\": false }";
        } else {
            return "{ \"message\": \"Usuario no encontrado\", \"error\": true }";
        }
    }

    public String get(Long id) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) { 
            User user = existingUser.get();
            return "{ \"nombre\": \"" + user.getNombre() + "\", \"email\": \"" + user.getEmail() + "\", \"rol\": \"" + user.getRol() + "\" }";
        } else {
            return "{ \"message\": \"Usuario no encontrado\", \"error\": true }";

        }
    }
}


