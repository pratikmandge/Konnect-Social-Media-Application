package com.example.springapp.controller;

import java.util.List;
import java.io.IOException;
import java.text.ParseException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

import com.example.springapp.model.Post;
import com.example.springapp.model.User;
import com.example.springapp.service.PostService;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import org.springframework.http.HttpHeaders;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("api/posts")
    public ResponseEntity<Post> createPost(@RequestParam("file") MultipartFile file, @RequestParam("post") String postJson) throws IOException {
        try{
            ObjectMapper objectMapper = new ObjectMapper();
            Post post = objectMapper.readValue(postJson, Post.class);
            Post createdPost = postService.createPost(post, file);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
        }catch (JsonProcessingException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    @GetMapping("api/posts/{postId}")
    public ResponseEntity<Post> getPostById(@PathVariable int postId) {
        Post post = postService.getPostById(postId);
        return ResponseEntity.ok(post);
    }

    @PutMapping("api/posts/{postId}")
    public ResponseEntity<Post> updatePost(@PathVariable int postId, @RequestBody Post updatedPost) {
        Post post = postService.updatePost(postId, updatedPost);
        return ResponseEntity.ok(post);
    }

    @DeleteMapping("api/posts/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable int postId) {
        postService.deletePost(postId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("api/posts/user")
    public ResponseEntity<List<Post>> getPostsByUser(@RequestParam("username") String username) {
        List<Post> posts = postService.getPostsByUser(username);
        return ResponseEntity.ok(posts);
    }
    
    @GetMapping("api/posts")
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("api/posts/{postId}/photo")
    public ResponseEntity<byte[]> getPostPhoto(@PathVariable("postId") int postId) {
        try{
            byte[] photoBytes = postService.getPostPhoto(postId);
            return ResponseEntity.ok(photoBytes);
        }  catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("api/posts/{postId}/like")
    public ResponseEntity<Void> likePost(@PathVariable int postId, @RequestParam String username) {
        postService.likePost(postId, username);
        return ResponseEntity.ok().build();
    }

    @PostMapping("api/posts/{postId}/unlike")
    public ResponseEntity<Void> unlikePost(@PathVariable int postId, @RequestParam String username) {
        postService.unlikePost(postId, username);
        return ResponseEntity.ok().build();
    }
}
