package com.example.springapp.service;

import com.example.springapp.model.Comment;
import com.example.springapp.model.Post;
import com.example.springapp.repository.CommentRepository;
import com.example.springapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentService {

    @Autowired
    private final PostService postService;
    private final CommentRepository commentRepository;

    public Comment getCommentById(int commentId) {
        return commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("Comment not found"));
    }

    public List<Comment> getCommentsByPost(int postId) {
        Post post = postService.getPostById(postId);
        return commentRepository.findByPost(post);
    }

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public Comment createComment(Comment comment) {
        Post post = postService.getPostById(comment.getPost().getId());
        comment.setPost(post);
        comment.setText(comment.getText());
        comment.setCreatedDate(comment.getCreatedDate());
        comment.setUpdatedDate(comment.getUpdatedDate());
        return commentRepository.save(comment);
    }

    public Comment updateComment(int commentId, Comment updatedComment) {
        Comment comment = getCommentById(commentId);
        comment.setText(updatedComment.getText());
        return commentRepository.save(comment);
    }

    @Transactional
    public void deleteComment(int commentId) {
        Comment comment = getCommentById(commentId);
        commentRepository.delete(comment);
    }
}