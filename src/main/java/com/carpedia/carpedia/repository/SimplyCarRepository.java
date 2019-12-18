package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.SimplyCarModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SimplyCarRepository extends JpaRepository<SimplyCarModel, Long> {
    //for tests

    SimplyCarModel findById(long id);

    List<SimplyCarModel> findAllByCompany(String company);
    List<SimplyCarModel> findAllByModel(String model);

    @Modifying
    @Query("UPDATE SimplyCarModel simplyCar SET simplyCar.company=?2, simplyCar.model=?3 WHERE simplyCar.id=?1")
    void updateSimplyCar(long id, String company, String model);

}
