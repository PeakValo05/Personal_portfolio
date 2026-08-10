package com.personal.portfolio.website.repository;
import com.personal.portfolio.website.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Custom query methods can be defined here if needed
}
