package com.example.springapp.model;

import com.example.springapp.model.User;
import com.example.springapp.model.Comment;

import java.time.LocalDate;

import java.util.List;
import java.util.HashSet;
import java.util.Set;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;
import javax.persistence.FetchType;
import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int postId;
    private String title;
    private String content;
    
    @Column
    private String photoPath;
    
    @Builder.Default
    private LocalDate createdAt = LocalDate.now();
    @Builder.Default
    private LocalDate updatedAt = LocalDate.now();

    @JsonIgnore
    @OneToMany(mappedBy = "post")
    private List<Comment> comments;

    @ManyToOne
    @JoinColumn(name = "username")
    private User user;

    @JsonIgnoreProperties("likedPosts")
    @ManyToMany(mappedBy = "likedPosts", fetch = FetchType.EAGER)
    private Set<User> likedByUsers = new HashSet<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void addLike(User user) {
        likedByUsers.add(user);
        user.getLikedPosts().add(this);
    }

    public void removeLike(User user) {
        likedByUsers.remove(user);
        user.getLikedPosts().remove(this);
    }
}
