package com.url.shortener.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "url_mapping")
public class UrlMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String originalUrl;
    private String shortUrl;
    private int clickCount = 0;
    private LocalDateTime createdDate;

    @ManyToOne
    @JoinColumn(name="user_id") //links the mentioned column to primary key of the other table and this is same for one-to-many relationships
    private User user;

    @OneToMany(mappedBy = "urlMapping")
    private List<ClickEvent> clickEvents;
}
