/*

Things that need to be implemented - extras (include both frontend and backend)
---------------------------------------------------------------------------------
1) Implementing an anon short link generator with a lifetime of say an hour. storing the same in a local storage or a h2 database.

*/
package com.url.shortener;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.url.shortener.repository")
public class UrlShortenerSbApplication {

	public static void main(String[] args) {
		SpringApplication.run(UrlShortenerSbApplication.class, args);
	}

}

/*

Here, We have three entities (tables for our database)

1) click_event
----------------
Stores total number of clicks for a url for analytics. has many-to-one relationship with url-mapping table

   id -> Big integer
   click_date -> Datetime(6)
   url_mapping_id Big_Integer

2) User
---------
It represents the users of our application. role represents the user's role in the system. it has one-to-many relationship with url_mapping table

   id -> Big integer
   email -> varchar(255)
   password -> varchar(255)
   role -> varchar(255)
   username -> varchar(255)

3) url_mapping
-----------------
Holds mapping between long url and short url. user_id tells us who the url belongs too to keep track of all urls that a concerning user has shortened.

   id -> Big integer
   click_count -> integer
   original_url -> varchar(255)
   short_url -> varchar(255)
   user_id -> Big Integer
   created_date -> Datetime(6)

 */

/*

How Json Web token works
------------------------
1) User Sends a request to a server to login using his credentials.
2) Once the authentication is successful, a token is generated and this token is now issued to the user to uniquely identify him or her.
3) This token is now sent along with any API requests that the user has sent to the server.
4) The server now receives the API request to confirm what the user needs (with token) and server now validates the received token, if the token is valid (genuine user), server will serve a response otherwise error will be thrown as a response.

-> Tokens are sent using HTTP header (along with our API request).   Format (Authorization: Bearer<token>)

-> randomly generated list of characters(dot)randomly generated list of characters(dot)randomly generated list of characters is the format our request will be in. The first part is header, second is payload and third is verified signature.


Files we are going to need
------------------------------
1) JWT Utils -> contains utility methods for generating,parsing and validating JWT. Includes generating a token from username, validating JWT and extracting username from token.

2) JWT Authentication Filter -> Filters incoming requests to check for valid JWT in header, setting authentication context if token is valid i.e It extracts JWT from a request header, validates it and configures spring security context with user details if token is valid. Now the request is authenticated.

3) JWT Authentication Response -> DTO for JWT Auth response

4) Security Config -> configures spring security filters and rules for application. Sets up security filter chain, permitting or denying access based on paths and roles.

Spring security provided tools for authentication/authorization process. here doing the same with users.

Spring security has its own inbuilt implementation of User (dummy user implementation) which would work but in a lot of cases custom is needed.

We need more files to set up our custom requirements along with the necessary authentication and authorization.
---------------------------
1) UserDetailsServiceImpl -> It is a service that loads user details from database upon authentication and informs the same to Spring security. bridges the gap between database (user entity) and spring security(userDetails interface).

2) UserDetailsImpl -> custom implementation of String Sec UserDetails interface. needed to represent the authenticated user in spring security.


Recap of the entire work process
------------------------------
1) JWT Authentication filter -> intercepts HTTP requests and extracts JWT tokens

2) JWT Utils -> Generate, validates tokens and provides helper methods

3) UserDetailsServiceImpl -> fetches User details from the database if token is valid

4) UserDetailsImpl -> Provides a spring security compatible representation of user for authentication and authorization.

*/

/*

Spring security helps us authenticate/authorize the users of our app, Spring security should know who the user is and how his/her information is being stored so that every request from that particular users can be authenticated. For this, we need to create a bridge between our user model (entity) and Spring Security. To make Spring security know against which entity(user) we are doing authentication for, we are using UserDetailsImpl service class.

Note-> DaoAuthProvider is a specialized-prebuilt class in spring security, and it helps authenticate users by retrieving their info from a custom database. Setts up how auth is handled by Spring Security. It is being configured in such a way that it is accepting the userDetails Service impl to work around the user.

 */
