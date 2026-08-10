package com.personal.portfolio.website.service;

import com.personal.portfolio.website.model.Project;
import com.personal.portfolio.website.repository.ProjectRepository;

import org.springframework.stereotype.Service;

@Service
public class ProjectService {


    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Iterable<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Save a new project entry
    public void saveProject(Project project) {
        projectRepository.save(project);
    }

    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElse(null);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

}
