package com.url.shortener.controller;

import com.url.shortener.models.UrlMapping;
import com.url.shortener.service.UrlMappingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RedirectController {

    private UrlMappingService urlMappingService;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(@PathVariable String shortUrl){
        UrlMapping urlMapping = urlMappingService.getOriginalUrl(shortUrl);
        if(urlMapping!=null){
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add("Location", urlMapping.getOriginalUrl());
            return ResponseEntity.status(302).headers(httpHeaders).build(); //we are adding HTTP headers in our response and using build() to craft and return a response entity type object.
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}

/*
1) HttpHeaders httpHeaders = new HttpHeaders();
    a) HttpHeaders is a Spring class used to represent the HTTP headers of an HTTP request or response.
    b) Here, an instance of HttpHeaders is created (httpHeaders) to store the headers that will be included in the HTTP response

2) httpHeaders.add("Location", urlMapping.getOriginalUrl());

    a) The add() method is used to add a header to the httpHeaders object.

    b) "Location" is the name of the HTTP header. This header is used in HTTP responses to specify the URL where the client should be redirected.

    c) urlMapping.getOriginalUrl() retrieves the original URL that the response should redirect to.

    d) In the context of this code, Location is set to the URL stored in urlMapping.getOriginalUrl(), which means the client will be redirected to this location.
*/
