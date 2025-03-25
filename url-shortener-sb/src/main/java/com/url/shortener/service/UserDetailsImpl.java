package com.url.shortener.service;

import com.url.shortener.models.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Data
@NoArgsConstructor
public class UserDetailsImpl implements UserDetails {

    private static final long serialVersionUID = 1L;
    /*identifies uniqueness of a serializable class. By setting a serialVersionUID, you're giving Java a way to check that the version of the class being loaded matches the version it was saved with. If they don’t match, Java will throw an exception.*/
    private Long id;
    private String username;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities; //manages roles in spring security.

    public UserDetailsImpl(Long id, String username, String email, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    //build method which will help us build the instance of UserDetailsImpl. The purpose of this method is to convert a User object from our database into a UserDetailsImpl option for spring security.
    public static UserDetailsImpl build(User user){
        GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole()); //role is being extracted from the user object and being converted into granted authority which is required by Spring Security.
        return new UserDetailsImpl(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                Collections.singletonList(authority)
        );
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    //UserDetails is the interface that represents user info that is required for authentication and authorization within Spring security. This class acts as a bridge between our user model and spring's implementation of UserDetails.


}
