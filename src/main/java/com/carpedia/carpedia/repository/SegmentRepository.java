package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.SegmentModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SegmentRepository extends CrudRepository<SegmentModel, Long> {
    SegmentModel findById(long id);

    List<SegmentModel> findByName(String name);
    //List<SimplyCar> findOne(long id);

}
