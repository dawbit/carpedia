package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CarModel;
import com.carpedia.carpedia.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarController {
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

//    @PostMapping("/car/postsave")
//    public String testsave(@RequestParam("idCompany") int idCompany, @RequestParam("name") String name,
//                            @RequestParam("start") String start, @RequestParam("stop") String end,
//                            @RequestParam("idEngine") long idEngine, @RequestParam("ncap_stars") int ncap_stars,
//                            @RequestParam("idCountry") int idCountry, @RequestParam("idSegment") int idSegment,
//                            @RequestParam("idBodyType") long idBodyType, @RequestParam("idUser") int idUser){
//                car.save(new CarModel(company.findById(idCompany),name,start,
//                end,  engine.findById(idEngine),ncap_stars,country.findById(idCountry),segment.findById(idSegment),
//                bodytype.findById(idBodyType),
//                user.findById(idUser)));
//        return "Done";
//    }

//    @PostMapping("/car/postsave2")
//    public String findAllCar(@RequestBody CarModel carModel) {
//        if (carExist(carModel)){
//            return "Car already exists";
//        }
//        else{
//            car.save(carModel);
//            return "Done";
//        }
//    }
//
//    private boolean carExist(CarModel carModel) {
//        return (getCarbyId(carModel.getRecipeid()) != null);
//    }



}
