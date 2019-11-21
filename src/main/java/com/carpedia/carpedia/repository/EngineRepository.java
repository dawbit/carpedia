package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.EngineModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EngineRepository extends CrudRepository<EngineModel, Long> {
    EngineModel findById(long id);

    List<EngineModel> findByName(String name);
    List<EngineModel> findByPower(int power);
    List<EngineModel> findByCapacity(float capacity);

    //List<SimplyCar> findOne(long id);

}
