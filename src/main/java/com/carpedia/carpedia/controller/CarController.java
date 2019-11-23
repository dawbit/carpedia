package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.repository.*;
import org.springframework.beans.factory.annotation.Autowired;

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

}
