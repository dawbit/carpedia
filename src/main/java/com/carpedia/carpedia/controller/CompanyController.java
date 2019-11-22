package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CompanyModel;
import com.carpedia.carpedia.model.CountryModel;
import com.carpedia.carpedia.repository.CompanyRepository;
import com.carpedia.carpedia.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompanyController {

    @Autowired
    CompanyRepository company;

    @Autowired
    CountryRepository country;

    @RequestMapping("/company/save")
    public String process(){
        // save a single Company

        CountryModel france = country.save(new CountryModel("France"));
        company.save(new CompanyModel("Peugeot",1810, france));
        return "Done";
    }

    @GetMapping("/company")
    public List<CompanyModel> getAllCompanies() {
        return company.findAll();
    }

    @GetMapping("/company/id/{id}")
    public CompanyModel getCompanyById(@PathVariable long id) {
        return company.findById(id);
    }

    @GetMapping("/company/name/{name}")
    public List<CompanyModel> getAllCompanyByName(@PathVariable String name) {
        return company.findAllByName(name);
    }

    @GetMapping("/company/foundation/{foundation}")
    public List<CompanyModel> getAllCompanyByFoundation(@PathVariable int foundation) {
        return company.findAllByFoundation(foundation);
    }

}