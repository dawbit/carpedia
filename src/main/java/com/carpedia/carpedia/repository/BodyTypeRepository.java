package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.BodyTypeModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BodyTypeRepository extends CrudRepository<BodyTypeModel, Long> {
    BodyTypeModel findById(long id);

    List<BodyTypeModel> findByName(String name);
    //List<SimplyCar> findOne(long id);

}
