package com.url.shortener.repository;

import com.url.shortener.models.ClickEvent;
import com.url.shortener.models.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent, Long> {
    List<ClickEvent> findByUrlMappingAndClickDateBetween(UrlMapping mapping, LocalDateTime startDate, LocalDateTime endDate);
    List<ClickEvent> findByUrlMappingInAndClickDateBetween(List<UrlMapping> urlMappings, LocalDateTime startDate, LocalDateTime endDate);
}

/*
This method will generate a query that retrieves all ClickEvent entities that:

1) Have a UrlMapping equal to the provided mapping.
2) Have a clickDate that falls within the provided range (between startDate and endDate).


SELECT * FROM click_event
WHERE url_mapping_id = :urlMapping
AND click_date BETWEEN :startDate AND :endDate;
*/

/*

This method will generate a query to retrieve all ClickEvent entities that:

1) Have a UrlMapping that matches any of the UrlMapping entities in the provided urlMappings list. i.e all urls that a particular user has created
2) Have a clickDate that falls within the provided date range (startDate and endDate). It gives us total click coi=unt for all URls per date.

SELECT * FROM click_event
WHERE url_mapping_id IN (:urlMappingsList)
AND click_date BETWEEN :startDate AND :endDate;
*/
