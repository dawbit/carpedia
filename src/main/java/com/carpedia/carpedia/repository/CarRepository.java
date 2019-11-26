package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<CarModel, Long> {
    CarModel findById(long id);
    CarModel findByName(String name);

}
