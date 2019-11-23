package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.*;
import com.carpedia.carpedia.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

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
}
