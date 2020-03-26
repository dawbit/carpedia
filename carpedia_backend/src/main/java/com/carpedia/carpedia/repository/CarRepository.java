package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<CarModel, Long> {

    CarModel findById(long id);
    CarModel findByName(String name);

    List<CarModel> findAllByCompanyNameIgnoreCase(String company);
    List<CarModel> findAllByCompanyCountryNameIgnoreCase(String country);
    List<CarModel> findAllByNameIgnoreCase(String name);
    List<CarModel> findAllByStartproduction(String startproduction);
    List<CarModel> findAllByEndproduction(String endproduction);
    List<CarModel> findAllByNcap(int ncap);
    List<CarModel> findAllBySegmentNameIgnoreCase(String segment);
    List<CarModel> findAllByBodytypeNameIgnoreCase(String bodytype);

}
