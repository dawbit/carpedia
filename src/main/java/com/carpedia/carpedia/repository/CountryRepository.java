package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CountryModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<CountryModel, Long> {
    CountryModel findById(long id);

    List<CountryModel> findByName(String name);
    //List<SimplyCar> findOne(long id);

}
