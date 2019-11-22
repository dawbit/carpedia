package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CompanyModel;
import com.carpedia.carpedia.model.CountryModel;
import com.carpedia.carpedia.repository.CompanyRepository;
import com.carpedia.carpedia.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {

    @Autowired
    CompanyRepository company;

    @Autowired
    CountryRepository country;

    @RequestMapping("/savecompany")
    public String process(){
        // save a single Company

        CountryModel france = country.save(new CountryModel("France"));
        company.save(new CompanyModel("Peugeot",  france));
        return "Done";
    }

    @RequestMapping("/company")
    public String findAll(){
        String result = "";

        for(CompanyModel company : company.findAll()){
            result += company.toString() + "<br>";
        }

        return result;
    }

    @RequestMapping("/company/id/{id}")
    public String fetchdataById(@PathVariable("id") long id){
        String result = "";
        result = company.findById(id).toString();
        return result;
    }

    @RequestMapping("/company/name/{name}")
    public String fetchDataByCompany(@PathVariable("name") String name){
        String result = "";

        for(CompanyModel company: company.findAllByName(name)){
            result += company.toString() + "<br>";
        }

        return result;
    }

//    @RequestMapping("/company/country/{country}") //to repair
//    public String fetchDataByCountry(@PathVariable("country") String country){
//        String result = "";
//
//        for(CompanyModel company: company.findByCountry(country)){
//            result += company.toString() + "<br>";
//        }
//
//        return result;
//    }

    @RequestMapping("/company/country/{country}") //lol, work
    public String fetchDataByCountry(@PathVariable("country") String name){
        String result = "";

        for(CountryModel country: country.findByName(name)){
            result += country.toString() + "<br>";
        }

        return result;
    }

}