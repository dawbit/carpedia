package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.EngineModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EngineRepository extends JpaRepository<EngineModel, Long> {

    EngineModel findById(long id);
    EngineModel findByName(String name);

    List<EngineModel> findAllByName(String name);
    List<EngineModel> findAllByPower(int power);
    List<EngineModel> findAllByCapacity(float capacity);

}
