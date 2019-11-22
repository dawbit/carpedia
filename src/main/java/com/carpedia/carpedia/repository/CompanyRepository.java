package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CompanyModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompanyRepository extends JpaRepository<CompanyModel, Long> {
    CompanyModel findById(long id);

    List<CompanyModel> findAllByName(String name);
    List<CompanyModel> findAllByFoundation(int foundation);
    //List<CompanyModel> findByCountry(String country);

}
