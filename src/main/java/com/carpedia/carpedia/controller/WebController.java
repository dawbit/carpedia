package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.SimplyCar;
import com.carpedia.carpedia.repository.SimplyCarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

    @Autowired
    SimplyCarRepository repository;

    @RequestMapping("/save")
    public String process(){
        // save a single Car
        repository.save(new SimplyCar("Volksvagen", "Passat"));
        repository.save(new SimplyCar("Volksvagen", "Polo"));
        repository.save(new SimplyCar("Peugeot", "206"));
        repository.save(new SimplyCar("Peugeot", "407"));

        // save a list of Cars
       // repository.save(Arrays.asList(new SimplyCar("Volksvagen", "Polo"), new SimplyCar("Peugeot", "407"),
        //        new SimplyCar("Peugeot", "206"), new SimplyCar("Kia", "Stinger")));

        return "Done";
    }


    @RequestMapping("/findall")
    public String findAll(){
        String result = "";

        for(SimplyCar simply : repository.findAll()){
            result += simply.toString() + "<br>";
        }

        return result;
    }

    //@RequestMapping("/findbyid")
   // public String findById(@RequestParam("id") long id){
    //    String result = "";
     //   result = repository.findOne(id).toString();
     //   return result;
    //}

    @RequestMapping("/findbycompany")
    public String fetchDataByCompany(@RequestParam("company") String company){
        String result = "";

        for(SimplyCar simply: repository.findByCompany(company)){
            result += simply.toString() + "<br>";
        }

        return result;
    }

    @RequestMapping("/findbymodel")
    public String fetchDataByModel(@RequestParam("model") String model){
        String result = "";

        for(SimplyCar simply: repository.findByModel(model)){
            result += simply.toString() + "<br>";
        }

        return result;
    }
}
