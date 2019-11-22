package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.SimplyCar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SimplyCarRepository extends JpaRepository<SimplyCar, Long> {
    //for tests

    SimplyCar findById(long id);

    List<SimplyCar> findAllByCompany(String company);
    List<SimplyCar> findAllByModel(String model);
    //List<SimplyCar> findOne(long id);

}
