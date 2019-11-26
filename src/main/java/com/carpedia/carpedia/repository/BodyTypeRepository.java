package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.BodyTypeModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BodyTypeRepository extends JpaRepository<BodyTypeModel, Long> {
    BodyTypeModel findById(long id);
    BodyTypeModel findByName(String name);

    List<BodyTypeModel> findAllByName(String name);
    //List<SimplyCar> findOne(long id);

}
