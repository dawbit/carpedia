package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CountryModel;
import com.carpedia.carpedia.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@RestController
public class CountryController {

    @Autowired
    EntityManager entityManager;

    @Autowired
    CountryRepository country;

//    @RequestMapping("/country/save")
////    public String process(){
////        // save a single Country
////        country.save(new CountryModel("Poland"));
////        country.save(new CountryModel("Germany"));
////        country.save(new CountryModel("France"));
////        country.save(new CountryModel("China"));
////        country.save(new CountryModel("Korea"));
////        country.save(new CountryModel("Russia"));
////        country.save(new CountryModel("polska")); // for testing pattern
////        return "Done";
////    }

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

    @PostMapping("/country/save")
    @Transactional
    public String saveCountry(@RequestBody CountryModel countryModel) {
        try {
            if (getCountryByIdForSave(countryModel.getId()) != null || doesCountryExist(countryModel.getName()) ) {
                return "Country already exists, or incorrect input format";
            }
            else {
                country.save(countryModel);
                return "Country saved";
            }
        } catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    @PutMapping("country/update")
    @Transactional
    public String updateCountry(@RequestBody CountryModel countryModel) {
        try {
            entityManager.createQuery("UPDATE CountryModel countryModel " +
                    "SET countryModel.name=?2 WHERE countryModel.id=?1")
                    .setParameter(1, countryModel.getId())
                    .setParameter(2, countryModel.getName())
                    .executeUpdate();
            return "Country updated";
        }
        catch (Exception exc){
            return "Not updated. Exception: " + exc.getMessage();
        }
    }

    @DeleteMapping("/country/delete")
    @Transactional
    public String deleteCountry(@RequestParam("id") long id) {
        try {
            country.deleteById(id);
            return "Country Deleted";
        } catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    private CountryModel getCountryByIdForSave(long id) {
        return country.findById(id);
    }

    private boolean doesCountryExist(String name) {
        return (country.findByName(name) != null);
    }

}
