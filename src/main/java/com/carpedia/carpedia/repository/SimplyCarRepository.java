package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.SimplyCarModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SimplyCarRepository extends JpaRepository<SimplyCarModel, Long> {
    //for tests

    SimplyCarModel findById(long id);

    List<SimplyCarModel> findAllByCompany(String company);
    List<SimplyCarModel> findAllByModel(String model);

}
