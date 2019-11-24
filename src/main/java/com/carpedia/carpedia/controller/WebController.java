package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.SimplyCar;
import com.carpedia.carpedia.repository.SimplyCarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class WebController {
    //for tests

    @Autowired
    SimplyCarRepository repository;

    @GetMapping("/simply/save")
    public String process(){
        repository.save(new SimplyCar("Volkswagen", "Polo"));
        repository.save(new SimplyCar("Peugeot", "206"));
        repository.save(new SimplyCar("Peugeot", "407"));
        repository.save(new SimplyCar("Kia", "Stinger"));
        repository.save(new SimplyCar("Fiat", "Punto"));
        return "Done";
    }

    @PostMapping("/postsave")
    public String procerder(@RequestParam("comp") String comp, @RequestParam("mod") String mod){
        repository.save(new SimplyCar(comp, mod));
        return "Done";
    }

    @PostMapping("/postsave2")
    public String procerder2(@RequestBody SimplyCar simplyCar){
        repository.save(simplyCar);
        // simplyCar.save
        //repository.save(new SimplyCar(comp, mod));
        return "Done";
    }

    @GetMapping("/simply")
    public List<SimplyCar> getAllSimplyCars() {
        return repository.findAll();
    }

    @GetMapping("/simply/id/{id}")
    public SimplyCar getSimplyCarsById(@PathVariable long id) {
        return repository.findById(id);
    }

    @GetMapping("/simply/company/{company}")
    public List<SimplyCar> getSimplyCarsByCompany(@PathVariable String company) {
        return repository.findAllByCompany(company);
    }

    @GetMapping("/simply/model/{model}")
    public List<SimplyCar> getSimplyCarsByModel(@PathVariable String model) {
        return repository.findAllByModel(model);
    }
}
