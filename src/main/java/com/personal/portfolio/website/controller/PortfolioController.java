package com.personal.portfolio.website.controller;

import com.personal.portfolio.website.model.Analytics;
import com.personal.portfolio.website.repository.AnalyticsRepository;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.personal.portfolio.website.service.SkillService;
import com.personal.portfolio.website.model.Skill;

@Controller
public class PortfolioController {

    private final AnalyticsRepository analyticsRepository;

    private final SkillService skillService;

    public PortfolioController(AnalyticsRepository analyticsRepository, SkillService skillService) {
        this.analyticsRepository = analyticsRepository;
        this.skillService = skillService;
    }
    
    // Home page
    @GetMapping("/")
    public String home(Model model) {

        // Fetch all analytics data and add it to the model
        List<Analytics> analyticsList = analyticsRepository.findAll();
        model.addAttribute("analyticsList", analyticsList);

        // Fetch all skills and add them to the model
        List<Skill> skillsList = (List<Skill>) skillService.getAllSkills();
        model.addAttribute("skillsList", skillsList);

        return "home";
    }

}