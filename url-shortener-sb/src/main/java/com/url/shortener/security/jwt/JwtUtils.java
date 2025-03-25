package com.url.shortener.security.jwt;

import com.url.shortener.service.UserDetailsImpl;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class JwtUtils {

    @Value("${jwt.secret}")
    private String jwtSecret;
    @Value("${jwt.expiration}")
    private int jwtExpirationMS;


    //method to extract JWT token from the Authorization header. Authorization -> Bearer <TOKEN> is the format in which all requests that are authenticated are done. Spring security can use this token to validate id the request is from a trusted source or not. This is for endpoints that requires authenticated users to process requests.

    public String getJwtFromHeader(HttpServletRequest request){
        String bearerToken = request.getHeader("Authorization");
        if(bearerToken!=null && bearerToken.startsWith(("Bearer "))) {
            return bearerToken.substring(7); //only taking the substring after Bearer_space_, This extracts the token from the Bearer <Token> (JWT Header) if the token exists.
        }
        return null;
    }

    public String generateToken(UserDetailsImpl userDetails){
        //method to generate a token with the custom provided params or attributes
        String username = userDetails.getUsername();
        //joining the list of available authorities as a string with a delimiter
        String roles = userDetails.getAuthorities().stream().map(authority -> authority.getAuthority())
                .collect(Collectors.joining(","));

        //generates a custom JWT token, we provide the roles it has available, start and exp date for token generated (here, it is 2 days converted to milliseconds)
        return Jwts.builder().subject(username)
                .claim("roles", roles)
                .issuedAt(new Date())
                .expiration(new Date((new Date().getTime() + jwtExpirationMS)))
                .signWith(key())
                .compact();
    }

    private Key key(){
        //Key decoder for our JWT Secret -> To validate our signature as a user to the server.
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public String getUserNameFromJwtToken(String token){
        //we are verifying our request with help of key and the parsing our request to get username from our token
        return Jwts.parser().verifyWith((SecretKey) key())
                .build().parseSignedClaims(token)
                .getPayload().getSubject();
    }

    public boolean validateToken(String authToken){
        try {
            //if the below line is successful in execution, the token is valid
            Jwts.parser().verifyWith((SecretKey) key())
                    .build().parseSignedClaims(authToken);
            return true;
        } catch (JwtException e) {
            throw new RuntimeException(e);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException(e);
        }
        catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}

/*

A JSON Web Token or JWT is made up of three parts:

The header: contains some metadata about the token itself.
The payload: contains the data that we want to encode into the token, so the more data we want to encode here the bigger is the JWT.
The signature.
These first two parts, the header and the payload, are just plain text that will get encoded, but not encrypted.

So anyone will be able to decode them and read them, we cannot store any sensitive data in here. But that's not a problem at all because in the third part, the signature, is where things really get interesting. The signature is created using the header, the payload, and the secret that is saved on the server.

And this whole process is then called signing the Json Web Token. The signing algorithm takes the header, the payload, and the secret to create a unique signature. So only this data plus the secret can create this signature. Then together with the header and the payload, these signature forms the JWT, which then gets sent to the client.

Once the server receives a JWT to grant access to a protected route, it needs to verify it in order to determine if the user really is who he claims to be. In other words, it will verify if no one changed the header and the payload data of the token. So again, this verification step will check if no third party actually altered either the header or the payload of the Json Web Token.

So, how does this verification actually work? Well, it is actually quite straightforward. Once the JWT is received, the verification will take its header and payload, and together with the secret that is still saved on the server, basically create a test signature.

But the original signature that was generated when the JWT was first created is still in the token, right? And that's the key to this verification. Because now all we have to do is to compare the test signature with the original signature. And if the test signature is the same as the original signature, then it means that the payload and the header have not been modified.

Because if they had been modified, then the test signature would have to be different. Therefore in this case where there has been no alteration of the data, we can then authenticate the user. And of course, if the two signatures are actually different, well, then it means that someone tampered with the data. Usually by trying to change the payload. But that third party manipulating the payload does of course not have access to the secret, so they cannot sign the JWT. So the original signature will never correspond to the manipulated data. And therefore, the verification will always fail in this case. And that's the key to making this whole system work. It's the magic that makes JWT so simple, but also extremely powerful.
 */
