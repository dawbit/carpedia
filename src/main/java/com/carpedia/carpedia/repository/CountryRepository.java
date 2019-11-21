package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CountryModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CountryRepository extends CrudRepository<CountryModel, Long> {
    CountryModel findById(long id);

    List<CountryModel> findByName(String name);
    //List<SimplyCar> findOne(long id);

}
