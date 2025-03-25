package com.url.shortener.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class ClickEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime clickDate;

    @ManyToOne
    @JoinColumn(name="url_mapping_id") //foreign key column in the database that links click event to URL Mapping by its primary key
    private UrlMapping urlMapping;
}
