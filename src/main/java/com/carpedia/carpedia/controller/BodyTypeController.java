package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.BodyTypeModel;
import com.carpedia.carpedia.repository.BodyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BodyTypeController {

    @Autowired
    BodyTypeRepository bodytype;

    @RequestMapping("/savebodytype")
    public String process(){
        // save a single BodyType
        bodytype.save(new BodyTypeModel("Sedan"));
        bodytype.save(new BodyTypeModel("Kombi"));
        bodytype.save(new BodyTypeModel("Hatchback"));
        return "Done";
    }

    @RequestMapping("/bodytype")
    public String findAll(){
        String result = "";

        for(BodyTypeModel bodytype : bodytype.findAll()){
            result += bodytype.toString() + "<br>";
        }

        return result;
    }

    @RequestMapping("/bodytype/id/{id}")
    public String fetchdataById(@PathVariable("id") long id){
        String result = "";
        result = bodytype.findById(id).toString();
        return result;
    }

    @RequestMapping("/bodytype/name/{name}")
    public String fetchDataByCompany(@PathVariable("name") String company){
        String result = "";

        for(BodyTypeModel bodytype: bodytype.findByName(company)){
            result += bodytype.toString() + "<br>";
        }

        return result;
    }

}
