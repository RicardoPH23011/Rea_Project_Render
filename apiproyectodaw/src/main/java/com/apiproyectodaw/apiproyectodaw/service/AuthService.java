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

        userRepository.save(user);
        return "Usuario registrado exitosamente";
    }

    public AuthResponse login(AuthRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isPresent() && passwordEncoder.matches(request.getPassword(), userOpt.get().getPassword())) {
            String token = jwtUtil.generateToken(request.getEmail(), userOpt.get().getRol(), userOpt.get().getNombre());
            return new AuthResponse(token);
        } else {
            throw new RuntimeException("Credenciales incorrectas");
        }
    }
}
