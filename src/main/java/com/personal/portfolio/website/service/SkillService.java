package com.personal.portfolio.website.service;

import com.personal.portfolio.website.model.Skill;
import com.personal.portfolio.website.repository.SkillRepository;
import org.springframework.stereotype.Service;

// Service class for managing skills
@Service    
public class SkillService {


    private final SkillRepository skillRepository;

    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository  ;
    }

    public Iterable<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    // Save a new skill entry
    public void saveSkill(Skill skill) {
        skillRepository.save(skill);
    }

    public Skill getSkillById(Long id) {
        return skillRepository.findById(id).orElse(null);
    }
    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }

}
