package com.personal.portfolio.website.model;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "education")
public class Education {

    // Define the fields for the Education entity
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String schoolName;

    @Column(nullable = false)
    private String degree;

    @Column(nullable = false)
    private Date startYear;

    @Column (nullable = true)
    private Date endYear;

    @Column(nullable = true)
    private String schoolUrl;

    @Column(nullable = true)
    private String schoolLogoUrl;

    public Education() {
    }

    public Education(String schoolName, String degree, Date startYear, Date endYear, String schoolUrl, String schoolLogoUrl) {
        this.schoolName = schoolName;
        this.degree = degree;
        this.startYear = startYear;
        this.endYear = endYear;
        this.schoolUrl = schoolUrl;
        this.schoolLogoUrl = schoolLogoUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public Date getStartYear() {
        return startYear;
    }

    public void setStartYear(Date startYear) {
        this.startYear = startYear;
    }

    public Date getEndYear() {
        return endYear;
    }

    public void setEndYear(Date endYear) {
        this.endYear = endYear;
    }

    public String getSchoolUrl() {
        return schoolUrl;
    }

    public void setSchoolUrl(String schoolUrl) {
        this.schoolUrl = schoolUrl;
    }

    public String getSchoolLogoUrl() {
        return schoolLogoUrl;
    }

    public void setSchoolLogoUrl(String schoolLogoUrl) {
        this.schoolLogoUrl = schoolLogoUrl;
    }
}
