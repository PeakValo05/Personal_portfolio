package com.personal.portfolio.website.service;

import com.personal.portfolio.website.model.Analytics;
import com.personal.portfolio.website.repository.AnalyticsRepository;
import org.springframework.stereotype.Service;


@Service    
public class AnalyticsService {


    private final AnalyticsRepository analyticsRepository;

    public AnalyticsService(AnalyticsRepository analyticsRepository) {
        this.analyticsRepository = analyticsRepository;
    }

    public Iterable<Analytics> getAllAnalytics() {
        return analyticsRepository.findAll();
    }

    // Save a new analytics entry
    public void saveAnalytics(Analytics analytics) {
        analyticsRepository.save(analytics);
    }

    public Analytics getAnalyticsById(Long id) {
        return analyticsRepository.findById(id).orElse(null);
    }
    public void deleteAnalytics(Long id) {
        analyticsRepository.deleteById(id);
    }

}
