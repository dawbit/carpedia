package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<CarModel, Long> {

    CarModel findById(long id);
    CarModel findByName(String name);

    List<CarModel> findAllByName(String name);
    List<CarModel> findAllByStartproduction(String startproduction);
    List<CarModel> findAllByEndproduction(String endproduction);
    List<CarModel> findAllByNcap(int ncap);

}
