package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.SimplyCar;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SimplyCarRepository extends CrudRepository<SimplyCar, Long> {
    List<SimplyCar> findByCompany(String company);
    List<SimplyCar> findByModel(String model);
}
