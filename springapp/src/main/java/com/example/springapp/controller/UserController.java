package com.example.springapp.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class UserController{
	
	private final UserService userService;

	@PostMapping("/api/users")
		public ResponseEntity<User> createUser(@RequestBody User user) {
    	User createdUser = userService.createUser(user);
    	return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
	}


	@GetMapping("/api/users/{userId}")
    public ResponseEntity<User> getUserByUsername(@PathVariable("userId") String userId) {
        User user = userService.getUserByUsername(userId);
        return ResponseEntity.ok(user);
    }

	@GetMapping("/api/users")
	public ResponseEntity<List<User>> getAllUserDetails() throws ParseException {
		List<User> userList = userService.getAllUsers();
		return ResponseEntity.ok(userList);
	}

	@PutMapping("/api/users/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable("userId") String userId, @RequestBody User updatedUser) {
        userService.editUser(updatedUser, userId);
        return ResponseEntity.ok("User updated successfully");
    }

	@DeleteMapping("/api/users/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable("userId") String userId) {
		if (userId != null){
			userService.deleteUser(userId);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
    }

	@PutMapping("/api/users/{userId}/profile-photo")
    public ResponseEntity<String> uploadProfilePhoto(@PathVariable("userId") String userId, @RequestParam("file") MultipartFile file) {
        String photoPath = userService.uploadProfilePhoto(file);
        userService.updateProfilePhoto(userId, photoPath);
        return ResponseEntity.ok("Profile photo uploaded successfully");
    }

    @PutMapping("/api/users/{userId}/cover-photo")
    public ResponseEntity<String> uploadCoverPhoto(@PathVariable("userId") String userId, @RequestParam("file") MultipartFile file) {
        String photoPath = userService.uploadCoverPhoto(file);
        userService.updateCoverPhoto(userId, photoPath);
        return ResponseEntity.ok("Cover photo uploaded successfully");
    }

    @GetMapping("/api/users/{userId}/profile-photo")
    public ResponseEntity<byte[]> getProfilePhoto(@PathVariable("userId") String userId) {
        try {
            byte[] photoBytes = userService.getProfilePhoto(userId);
            return ResponseEntity.ok(photoBytes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/api/users/{userId}/cover-photo")
    public ResponseEntity<byte[]> getCoverPhoto(@PathVariable("userId") String userId) {
        try {
            byte[] photoBytes = userService.getCoverPhoto(userId);
            return ResponseEntity.ok(photoBytes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/api/users/{userId}/profile-photo")
    public ResponseEntity<String> deleteProfilePhoto(@PathVariable("userId") String userId) {
        userService.deleteProfilePhoto(userId);
        return ResponseEntity.ok("Profile photo deleted successfully");
    }

    @DeleteMapping("/api/users/{userId}/cover-photo")
    public ResponseEntity<String> deleteCoverPhoto(@PathVariable("userId") String userId) {
        userService.deleteCoverPhoto(userId);
        return ResponseEntity.ok("Cover photo deleted successfully");
    }
}