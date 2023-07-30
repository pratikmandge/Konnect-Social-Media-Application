package com.example.springapp.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import java.util.List;
import java.util.Optional;
import java.text.ParseException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${user.photos.profile-folder}")
    private String profilePhotoFolder;

    @Value("${user.photos.cover-folder}")
    private String coverPhotoFolder;

    public User getUserByUsername(String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        return optionalUser.orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public User createUser(User newUser) {
        String username = newUser.getUsername();
        if (userRepository.existsByUsername(username)) {
            throw new IllegalArgumentException("Username already exists");
        }
        return userRepository.save(newUser);
    }

    public void editUser(User updatedUser, String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        User existingUser = optionalUser.orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (updatedUser.getUsername() != null) {
            existingUser.setUsername(updatedUser.getUsername());
        }
        if (updatedUser.getPassword() != null) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }
        if (updatedUser.getEmail() != null) {
            existingUser.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getBio() != null) {
            existingUser.setBio(updatedUser.getBio());
        }
        if (updatedUser.getDateOfBirth() != null) {
            try {
                existingUser.setDateOfBirth(updatedUser.getDateOfBirth());
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        if (updatedUser.getProfilePhotoPath() != null) { 
            existingUser.setProfilePhotoPath(updatedUser.getProfilePhotoPath());
        }
        userRepository.save(existingUser);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public void deleteUser(String username) {
        userRepository.deleteByUsername(username);
    }

    public String uploadProfilePhoto(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Profile photo is empty");
        }

        try {
            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
            Path profilePhotoPath = Paths.get(profilePhotoFolder + fileName);
            Files.createDirectories(profilePhotoPath.getParent());
            Files.write(profilePhotoPath, file.getBytes());

            return profilePhotoFolder + fileName;
        } catch (IOException e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Error uploading profile photo");
        }
    }

    public String uploadCoverPhoto(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Cover photo is empty");
        }

        try {
            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
            Path coverPhotoPath = Paths.get(coverPhotoFolder + fileName);
            Files.createDirectories(coverPhotoPath.getParent());
            Files.write(coverPhotoPath, file.getBytes());

            return coverPhotoFolder + fileName;
        } catch (IOException e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Error uploading cover photo");
        }
    }

    public byte[] getProfilePhoto(String userId) {
        User user = getUserByUsername(userId);
        String profilePhotoPath = user.getProfilePhotoPath();

        if (profilePhotoPath == null) {
            throw new IllegalArgumentException("Profile photo not found");
        }

        try {
            return Files.readAllBytes(Paths.get(profilePhotoPath));
        } catch (IOException e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Error reading profile photo");
        }
    }

    public byte[] getCoverPhoto(String userId) {
        User user = getUserByUsername(userId);
        String coverPhotoPath = user.getCoverPhotoPath();

        if (coverPhotoPath == null) {
            throw new IllegalArgumentException("Cover photo not found");
        }

        try {
            return Files.readAllBytes(Paths.get(coverPhotoPath));
        } catch (IOException e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Error reading cover photo");
        }
    }

    public void updateProfilePhoto(String userId, String photoPath) {
        User user = getUserByUsername(userId);
        user.setProfilePhotoPath(photoPath);
        userRepository.save(user);
    }

    public void updateCoverPhoto(String userId, String photoPath) {
        User user = getUserByUsername(userId);
        user.setCoverPhotoPath(photoPath);
        userRepository.save(user);
    }

    public void deleteProfilePhoto(String userId) {
        User user = getUserByUsername(userId);
        String profilePhotoPath = user.getProfilePhotoPath();

        if (profilePhotoPath != null) {
            try {
                Files.delete(Paths.get(profilePhotoPath));
                user.setProfilePhotoPath(null);
                userRepository.save(user);
            } catch (IOException e) {
                e.printStackTrace();
                throw new IllegalArgumentException("Error deleting profile photo");
            }
        }
    }

    public void deleteCoverPhoto(String userId) {
        User user = getUserByUsername(userId);
        String coverPhotoPath = user.getCoverPhotoPath();

        if (coverPhotoPath != null) {
            try {
                Files.delete(Paths.get(coverPhotoPath));
                user.setCoverPhotoPath(null);
                userRepository.save(user);
            } catch (IOException e) {
                e.printStackTrace();
                throw new IllegalArgumentException("Error deleting cover photo");
            }
        }
    }
}
