package com.personal.portfolio.website.controller;

import com.personal.portfolio.website.model.Analytics;
import com.personal.portfolio.website.repository.AnalyticsRepository;
import com.personal.portfolio.website.model.Project;
import java.util.List;
import com.personal.portfolio.website.model.Education;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.personal.portfolio.website.service.SkillService;
import com.personal.portfolio.website.model.Skill;
import com.personal.portfolio.website.service.ProjectService;
import com.personal.portfolio.website.service.EducationService;

@Controller
public class PortfolioController {

    private final AnalyticsRepository analyticsRepository;

    private final SkillService skillService;

    private final ProjectService projectService;

    private final EducationService educationService;

    

    public PortfolioController(AnalyticsRepository analyticsRepository, SkillService skillService, ProjectService projectService, EducationService educationService) {
        this.analyticsRepository = analyticsRepository;
        this.skillService = skillService;
        this.projectService = projectService;
        this.educationService = educationService;
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

        // Fetch all projects and add them to the model
        List<Project> projectsList = (List<Project>) projectService.getAllProjects();
        model.addAttribute("projectsList", projectsList);

        // Fetch all education entries and add them to the model
        List<Education> educationList = (List<Education>) educationService.getAllEducations();
        model.addAttribute("educationList", educationList);

        return "home"; // or "main-body" depending on which template you want to render
    }

}