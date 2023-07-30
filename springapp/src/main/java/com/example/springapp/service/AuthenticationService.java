package com.example.springapp.service;

import com.example.springapp.controller.AuthenticationRequest;

import org.springframework.security.core.userdetails.UserDetails;

import com.example.springapp.controller.AuthenticationResponse;
import com.example.springapp.controller.RegisterRequest;
import com.example.springapp.model.User;
import com.example.springapp.model.UserRole;
import com.example.springapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.stream.Collectors;

import lombok.Builder;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final JwtService jwtService;
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private static ArrayList<User> userList = new ArrayList<>();

    public AuthenticationResponse registerUser(RegisterRequest request) {
        if (repository.existsByUsername(request.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .dateOfBirth(request.getDateOfBirth())
                .registrationDate(request.getRegistrationDate())
                .role(UserRole.USER)
                .build();
        repository.save(user);
        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse registerAdmin(RegisterRequest request) {
        if (repository.existsByUsername(request.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .dateOfBirth(request.getDateOfBirth())
                .registrationDate(request.getRegistrationDate())
                .role(UserRole.ADMIN)
                .build();
        repository.save(user);
        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    // Update user
    public void editUser(User updatedUser, String username) {
        userList = (ArrayList<User>) userList.stream()
                .map(e -> {
                    if (e.getUsername().equals(username)) {
                        e.setId(updatedUser.getId());
                        e.setUsername(updatedUser.getUsername());
                        e.setPassword(updatedUser.getPassword());
                        e.setEmail(updatedUser.getEmail());
                        e.setBio(updatedUser.getBio());
                        try {
                            e.setDateOfBirth(updatedUser.getDateOfBirth());
                        } catch (ParseException e1) {
                            e1.printStackTrace();
                        }
                        e.setProfilePhotoPath(updatedUser.getProfilePhotoPath());
                    }
                    return e;
                }).collect(Collectors.toList());
        repository.save(updatedUser);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        User user = repository.findByUsername(request.getUsername()).orElseThrow();
        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public UserDetails getUserDetailsFromToken(String token) {
        String username = jwtService.extractUsername(token);
        User user = repository.findByUsername(username).orElseThrow();
        return user;
    }
}
