package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.CarModel;
import com.carpedia.carpedia.model.EngineModel;
import com.carpedia.carpedia.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/Hi")
    public String rabarbar() {
        return "elo";
    }

//    //@PostMapping("/simply/save/{idCompany}/{idEngine}/{idBodyType}")
//    //@PutMapping("/testing/save/{idCompany}/{name}/{start}/{end}/{idEngine}/{ncap_stars}/{idCountry}/{idSegment}/{idBodyType}/{idUser}")
//    @PostMapping("/testing")
//    public String addSimplyCars(@PathVariable int idCompany, @PathVariable String name,
//                                @PathVariable String start, @PathVariable String end,
//                                @PathVariable long idEngine, @PathVariable int ncap_stars,
//                                @PathVariable int idCountry, @PathVariable int idSegment,
//                                @PathVariable long idBodyType, @PathVariable int idUser
//    ) {
//        //CompanyModel company = CompanyRepository.findById(idCompany);
//        //company.findById(idCompany);
//        //EngineModel engine = EngineRepository.findById(idEngine);
//        //BodyTypeModel bodyType = BodyTypeRepository.findById(idBodyType);
//        //bodytype.findById(idEngine);
////        if (company == null || engine == null)
////            return "dupa5";
//        car.save(new CarModel(company.findById(idCompany),name,start,
//                end, engine.findById(idEngine),ncap_stars,country.findById(idCountry),segment.findById(idSegment),
//                bodytype.findById(idBodyType),
//                user.findById(idUser)));
//        return "Done";
//    }

    @PostMapping("/car/postsave")
    public String rereer(@RequestParam("idCompany") int idCompany, @RequestParam("name") String name,
                            @RequestParam("start") String start, @RequestParam("stop") String end,
                            @RequestParam("idEngine") long idEngine, @RequestParam("ncap_stars") int ncap_stars,
                            @RequestParam("idCountry") int idCountry, @RequestParam("idSegment") int idSegment,
                            @RequestParam("idBodyType") long idBodyType, @RequestParam("idUser") int idUser){
        //repository.save(new SimplyCar(comp, mod));
                car.save(new CarModel(company.findById(idCompany),name,start,
                end,  engine.findById(idEngine),ncap_stars,country.findById(idCountry),segment.findById(idSegment),
                bodytype.findById(idBodyType),
                user.findById(idUser)));
        return "Done";
    }

    @PostMapping("/car/postsave2")
    public String rereer2(@RequestBody CarModel carModel) {
        //repository.save(new SimplyCar(comp, mod));
        //CarModel car = new CarModel()
        car.save(carModel);
        return "Done";
    }

    @GetMapping("/car")
    public List<CarModel> getAllCars() {
        return car.findAll();
    }
}
