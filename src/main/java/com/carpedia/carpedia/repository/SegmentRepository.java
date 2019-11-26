package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.SegmentModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SegmentRepository extends JpaRepository<SegmentModel, Long> {
    SegmentModel findById(long id);
    SegmentModel findByName(String name);

    List<SegmentModel> findAllByName(String name);
    //List<SimplyCar> findOne(long id);

}
