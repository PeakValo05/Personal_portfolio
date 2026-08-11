package com.personal.portfolio.website.service;

import com.personal.portfolio.website.model.Education;
import com.personal.portfolio.website.repository.EducationRepository;

import org.springframework.stereotype.Service;

@Service
public class EducationService {


    private final EducationRepository educationRepository;

    public EducationService(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    public Iterable<Education> getAllEducations() {
        return educationRepository.findAll();
    }

    // Save a new project entry
    public void saveEducation(Education education) {
        educationRepository.save(education  );
    }

    public Education getEducationById(Long id) {
        return educationRepository.findById(id).orElse(null);
    }

    public void deleteEducation(Long id) {
        educationRepository.deleteById(id);
    }

}
