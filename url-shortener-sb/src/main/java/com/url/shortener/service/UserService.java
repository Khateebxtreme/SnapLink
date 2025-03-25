package com.url.shortener.service;

import com.url.shortener.dtos.LoginRequest;
import com.url.shortener.models.User;
import com.url.shortener.repository.UserRepository;
import com.url.shortener.security.jwt.JwtAuthenticationResponse;
import com.url.shortener.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private AuthenticationManager authenticationManager; //used to process an auth request passed to it and returns a fully populated auth object if successful
    private JwtUtils jwtUtils;

    public User registerUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public JwtAuthenticationResponse authenticateUser(LoginRequest loginRequest){
        //if the provided username and password are valid then we will have an authentication object over here. We are creating an instance of usernamePasswordAuthenticationToken, which is class provided to us by Spring Security which is designed to be a simple presentation of username and password (i.e. User Credentials) and we are getting the credentials through our Login request.The instance is now provided to authenticate method of auth manager. validity is checked, through security configurations in security package. - refer how validation is done
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        //We are now setting up security context. Spring Security will hold the authentication data for current request/session.
        SecurityContextHolder.getContext().setAuthentication(authentication);
        //As generate token method requires a userDetailsImpl instance, we can do it through the getPrincipal() method. Through this method, we are giving access to an instance of the mentioned object.
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        //We now generate a token to be sent as a response to the user.
        String jwt = jwtUtils.generateToken(userDetails);
        return new JwtAuthenticationResponse(jwt);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("User not found with the username -> "+ username)
        );
    }

    public boolean isUserNamePresent(String username) {
        return userRepository.findByUsername(username).isPresent();
    }
}
