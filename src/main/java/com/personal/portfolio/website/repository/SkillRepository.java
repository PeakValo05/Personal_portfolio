package com.personal.portfolio.website.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.personal.portfolio.website.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    // Custom query methods can be defined here if needed
}
