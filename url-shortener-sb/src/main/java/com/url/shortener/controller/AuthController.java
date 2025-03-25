package com.url.shortener.controller;

import com.url.shortener.dtos.LoginRequest;
import com.url.shortener.dtos.RegisterRequest;
import com.url.shortener.models.User;
import com.url.shortener.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    //This endpoint will hold our auth related endpoints -> register, login and forgot password

    private UserService userService;

    @PostMapping("/public/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest){
        //will receive data from a DTO object RegisterRequest to handle data sent by user through registration form. DTO objects help in validating the data (to see if it is in appropriate form) before uploading the same to the database.

        if(userService.isUserNamePresent(registerRequest.getUsername())){
            return new ResponseEntity<>("User Already Exists", HttpStatus.BAD_REQUEST);
        }
        else{
            User user = new User();
            user.setUsername(registerRequest.getUsername());
            user.setPassword(registerRequest.getPassword());
            user.setEmail(registerRequest.getEmail());
            user.setRole("ROLE_USER"); //default hardcoded role for each user that is being created
            userService.registerUser(user);
            return ResponseEntity.ok("User Registered Successfully into the database");
        }
    }

    //login functionality will do the job of authenticating our users against the provided credentials which we have stored in our database, once user is validated, we would be getting back to the user along with a success status and token.
    @PostMapping("/public/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        //To authenticate our users, we will make use of a service class UserService's method - authenticate user
        //once the token is returned, users can use the provided token for subsequent requests or accessing authenticated apis.
        return ResponseEntity.ok(userService.authenticateUser(loginRequest));
    }
}
