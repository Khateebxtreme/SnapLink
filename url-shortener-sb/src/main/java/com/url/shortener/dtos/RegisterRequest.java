package com.url.shortener.dtos;

import lombok.Data;
import lombok.NonNull;

import java.util.Set;

@Data
@NonNull
public class RegisterRequest {

    private String username;
    private String email;
    private Set<String> role;
    private String password;
}