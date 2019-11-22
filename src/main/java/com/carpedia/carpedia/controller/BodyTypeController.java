package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.BodyTypeModel;
import com.carpedia.carpedia.repository.BodyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BodyTypeController {

    @Autowired
    BodyTypeRepository bodytype;

    @RequestMapping("/bodytype/save")
    public String process(){
        // save a single BodyType
        bodytype.save(new BodyTypeModel("Sedan"));
        bodytype.save(new BodyTypeModel("Kombi"));
        bodytype.save(new BodyTypeModel("Hatchback"));
        return "Done";
    }

    @GetMapping("/bodytype")
    public List<BodyTypeModel> getAllBodyTypes() {
        return (List<BodyTypeModel>) bodytype.findAll();
    }

    @GetMapping("/bodytype/id/{id}")
    public BodyTypeModel getAllBodyTypeById(@PathVariable long id) {
        return bodytype.findById(id);
    }

    @GetMapping("/bodytype/name/{name}")
    public List<BodyTypeModel> getAllBodyTypeByName(@PathVariable String name) {
        return bodytype.findAllByName(name);
    }

}
