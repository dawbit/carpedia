package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CarModel;
import com.carpedia.carpedia.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@CrossOrigin
@RestController
public class CarController {

    @Autowired
    EntityManager entityManager;

    @Autowired
    CompanyRepository company;

    @Autowired
    EngineRepository engine;

    @Autowired
    CountryRepository country;

    @Autowired
    SegmentRepository segment;

    @Autowired
    BodyTypeRepository bodytype;

    @Autowired
    UserRepository user;

    @Autowired
    CarRepository car;


    @GetMapping("/car")
    public List<CarModel> getAllCars() {
        return car.findAll();
    }

    @GetMapping("/car/id/{id}")
    public CarModel getCarById(@PathVariable long id) {
        return car.findById(id);
    }

    @GetMapping("/car/company/{company}")
    public List<CarModel> getCarByCompanyName(@PathVariable String company) {
        return car.findAllByCompanyNameIgnoreCase(company);
    }

    @GetMapping("/car/country/{country}")
    public List<CarModel> getCarByCompanyCountryName(@PathVariable String country) {
        return car.findAllByCompanyCountryNameIgnoreCase(country);
    }

    @GetMapping("/car/name/{name}")
    public List<CarModel> getCarByName(@PathVariable String name) {
        return car.findAllByNameIgnoreCase(name);
    }

    @GetMapping("/car/startproduction/{startproduction}")
    public List<CarModel> getCarByStartproduction(@PathVariable String startproduction) {
        return car.findAllByStartproduction(startproduction);
    }

    @GetMapping("/car/endproduction/{endproduction}")
    public List<CarModel> getCarByEndproduction(@PathVariable String endproduction) {
        return car.findAllByEndproduction(endproduction);
    }

    @GetMapping("/car/ncap/{ncap}")
    public List<CarModel> getCarByNcap(@PathVariable int ncap) {
        return car.findAllByNcap(ncap);
    }

    @GetMapping("/car/segment/{segment}")
    public List<CarModel> getCarBySegmentName(@PathVariable String segment) {
        return car.findAllBySegmentNameIgnoreCase(segment);
    }

    @GetMapping("/car/bodytype/{bodytype}")
    public List<CarModel> getCarByBodytypeName(@PathVariable String bodytype) {
        return car.findAllByBodytypeNameIgnoreCase(bodytype);
    }

    @PostMapping("/car/save")
    @Transactional
    public String saveCar(@RequestBody CarModel carModel) {
        try {
            if (getCarByIdForSave(carModel.getId()) != null || doesCarExist(carModel.getName()) ) {
                return "Car already exists, or incorrect input format";
            }
            else {
                car.save(carModel);
                return "Car saved";
            }
        }
        catch (Exception exc) {
            return "Not saved. Exception: " + exc.getMessage();
        }
    }

    @PutMapping("car/update")
    @Transactional
    public String updateCar(@RequestBody CarModel carModel) {
        try {
            entityManager.createQuery("UPDATE CarModel carModel " +
                    "SET carModel.company=?2, carModel.name=?3, carModel.startproduction=?4," +
                    "carModel.endproduction=?5, carModel.ncap=?6 WHERE carModel.id=?1")
                    .setParameter(1, carModel.getId())
                    .setParameter(2, carModel.getCompany())
                    .setParameter(3, carModel.getName())
                    .setParameter(4, carModel.getStartproduction())
                    .setParameter(5, carModel.getEndproduction())
                    .setParameter(6, carModel.getNcap())
                    .executeUpdate();

            entityManager.createQuery("UPDATE CarModel carModel SET carModel.country=?2 " +
                    "WHERE carModel.id=?1")
                    .setParameter(1, carModel.getId())
                    .setParameter(2, carModel.getCountry())
                    .executeUpdate();

            entityManager.createQuery("UPDATE CarModel carModel SET carModel.segment=?2 " +
                    "WHERE carModel.id=?1")
                    .setParameter(1, carModel.getId())
                    .setParameter(2, carModel.getSegment())
                    .executeUpdate();

            entityManager.createQuery("UPDATE CarModel carModel SET carModel.bodytype=?2 " +
                    "WHERE carModel.id=?1")
                    .setParameter(1, carModel.getId())
                    .setParameter(2, carModel.getBodytype())
                    .executeUpdate();

            return "Car updated";
        }
        catch (Exception exc){
            return "Not updated. Exception: " + exc.getMessage();
        }
    }

    @DeleteMapping("/car/delete")
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Transactional
    public String deleteCar(@RequestParam("id") long id) {
        try {
            car.deleteById(id);
            return "Car Deleted";
        }
        catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    private CarModel getCarByIdForSave(long id) {
        return car.findById(id);
    }

    private boolean doesCarExist(String name) {
        return (car.findByName(name) != null);
    }

}
