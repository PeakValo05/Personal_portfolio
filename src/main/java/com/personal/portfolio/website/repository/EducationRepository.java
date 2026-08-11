package com.personal.portfolio.website.repository;

import com.personal.portfolio.website.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<Education, Long> {
    
}
