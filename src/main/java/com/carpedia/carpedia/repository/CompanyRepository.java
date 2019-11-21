package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CompanyModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CompanyRepository extends CrudRepository<CompanyModel, Long> {
    CompanyModel findById(long id);

    List<CompanyModel> findByName(String name);
    //List<CompanyModel> findByCountry(String country);

}
