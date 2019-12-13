package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CompanyModel;
import com.carpedia.carpedia.repository.CompanyRepository;
import com.carpedia.carpedia.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@CrossOrigin
@RestController
public class CompanyController {

    @Autowired
    EntityManager entityManager;

    @Autowired
    CompanyRepository company;

    @Autowired
    CountryRepository country;


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

    @PostMapping("/company/save")
    @Transactional
    public String saveCompany(@RequestBody CompanyModel companyModel) {
        try {
            if (getCompanyByIdForSave(companyModel.getId()) != null || doesCompanyExist(companyModel.getName())) {
                return "Company already exists, or incorrect input format";
            } else {
                company.save(companyModel);
                return "Company saved";
            }
        }
        catch (Exception exc) {
            return "Not saved. Exception: " + exc.getMessage();
        }
    }

    @PutMapping("company/update")
    @Transactional
    public String updateCompany(@RequestBody CompanyModel companyModel) {
        try {
            entityManager.createQuery("UPDATE CompanyModel companyModel " +
                    "SET companyModel.name=?2, companyModel.foundation=?3," +
                    "companyModel.country=?4 WHERE companyModel.id=?1")
                    .setParameter(1, companyModel.getId())
                    .setParameter(2, companyModel.getName())
                    .setParameter(3, companyModel.getFoundation())
                    .setParameter(4,companyModel.getCountry())
                    .executeUpdate();
            return "Company updated";
        }
        catch (Exception exc){
            return "Not updated. Exception: " + exc.getMessage();
        }
    }

    @DeleteMapping("/company/delete")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Transactional
    public String deleteCompany(@RequestParam("id") long id) {
        try {
            company.deleteById(id);
            return "Company Deleted";
        }
        catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    private CompanyModel getCompanyByIdForSave(long id) {
        return company.findById(id);
    }

    private boolean doesCompanyExist(String name) {
        return (company.findByName(name) != null);
    }

}
