package com.example.springapp.service;

import com.example.springapp.model.Post;
import com.example.springapp.model.User;

import java.io.InputStream;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import com.example.springapp.service.UserService;

import com.example.springapp.repository.PostRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

    @Autowired
    private final UserService userService;
    private final PostRepository postRepository;

    @Value("${post.photos.post-folder}")
    private String postPhotoFolder;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(int postId) {
        return postRepository.findById(postId).orElseThrow(() -> new IllegalArgumentException("Post not found"));
    }

    public List<Post> getPostsByUser(String userId) {
        User user = userService.getUserByUsername(userId);
        return postRepository.findByUser(user);
    }

    public Post createPost(Post post, MultipartFile file) throws IOException {
        User user = userService.getUserByUsername(post.getUser().getUsername());
        post.setUser(user);
        post.setTitle(post.getTitle());
        post.setContent(post.getContent());
        post.setCreatedAt(post.getCreatedAt());
        post.setUpdatedAt(post.getUpdatedAt());

        if (!file.isEmpty()) {
            String photoFileName = "post_" + post.getId() + "_" + System.currentTimeMillis() + ".jpg";
            String photoPath = postPhotoFolder + photoFileName;
            savePhoto(file, photoPath);
            post.setPhotoPath(photoPath);
        }
        return postRepository.save(post);
    }    

    private void savePhoto(MultipartFile file, String targetPath) throws IOException {
        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, Paths.get(targetPath), StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public byte[] getPostPhoto(int postId) {
        Post post = getPostById(postId);
        String photoFileName = post.getPhotoPath();
        if (photoFileName == null) {
            throw new IllegalArgumentException("Post photo not found");
        }
        try {
            return Files.readAllBytes(Paths.get(photoFileName));
        } catch (IOException e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Error reading post photo");
        }
    }

    public Post updatePost(int postId, Post updatedPost) {
        Post post = getPostById(postId);    
        post.setTitle(updatedPost.getTitle());
        post.setContent(updatedPost.getContent());

        if (!updatedPost.getPhotoPath().isEmpty()) {
            String photoFileName = "post_" + updatedPost.getId() + "_" + System.currentTimeMillis() + ".jpg";
            String photoPath = postPhotoFolder + photoFileName;
            savePhoto(updatedPost.getPhotoPath(), photoPath);
            post.setPhotoPath(photoPath);
        }
        return postRepository.save(post);
    }

    @Transactional
    public void deletePost(int postId) {
        Post post = getPostById(postId);

        if (post.getPhotoPath() != null) {
            deletePhoto(post.getPhotoPath());
        }

        postRepository.delete(post);
    }

    private void savePhoto(String sourcePath, String targetPath) {
        try {
            Files.copy(Paths.get(sourcePath), Paths.get(targetPath));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void deletePhoto(String photoFileName) {
        String photoPath = postPhotoFolder + photoFileName;
        try {
            Files.deleteIfExists(Paths.get(photoPath));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Transactional
    public void likePost(int postId, String username) {
        Post post = getPostById(postId);
        User user = userService.getUserByUsername(username);
        post.addLike(user);
        postRepository.save(post);
    }

    @Transactional
    public void unlikePost(int postId, String username) {
        Post post = getPostById(postId);
        User user = userService.getUserByUsername(username);
        post.removeLike(user);
        postRepository.save(post);
    }
}
