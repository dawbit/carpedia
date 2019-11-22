package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CountryModel;
import com.carpedia.carpedia.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    @Autowired
    CountryRepository country;

    @RequestMapping("/country/save")
    public String process(){
        // save a single Country
        country.save(new CountryModel("Poland"));
        country.save(new CountryModel("Germany"));
        country.save(new CountryModel("France"));
        country.save(new CountryModel("China"));
        country.save(new CountryModel("Korea"));
        country.save(new CountryModel("Russia"));
        return "Done";
    }

    @GetMapping("/country")
    public List<CountryModel> getAllCountries() {
        return (List<CountryModel>) country.findAll();
    }

    @GetMapping("/country/id/{id}")
    public CountryModel getCountryById(@PathVariable long id) {
        return country.findById(id);
    }

    @GetMapping("/country/name/{name}")
    public List<CountryModel> getCountryByName(@PathVariable String name) {
        return country.findAllByName(name);
    }

}
