package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CarModel;
import com.carpedia.carpedia.model.CompanyModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<CarModel, Long> {
    CompanyModel findById(long id);

}
