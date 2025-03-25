package com.url.shortener.repository;

import com.url.shortener.models.UrlMapping;
import com.url.shortener.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/* SELECT * FROM url_mapping WHERE short_url = 'shortUrl_arg';
    -> It returns all columns of a single unique record where our shortURL exists.
    */

//SELECT * FROM url_mapping WHERE user_id = ?;
//It returns all records where the short url is created by the specified user.

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {
    UrlMapping findByShortUrl(String shortUrl);
    List<UrlMapping> findByUser(User user);
}

