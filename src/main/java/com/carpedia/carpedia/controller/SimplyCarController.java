package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.SimplyCarModel;
import com.carpedia.carpedia.repository.SimplyCarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@CrossOrigin
@RestController
public class SimplyCarController {
    //for tests
    @Autowired
    private EntityManager entityManager;

    @Autowired
    SimplyCarRepository repository;


    @GetMapping("/simply")
    public List<SimplyCarModel> getAllSimplyCars() {
        return repository.findAll();
    }

    @GetMapping("/simply/id/{id}")
    public SimplyCarModel getSimplyCarsById(@PathVariable long id) {
        return repository.findById(id);
    }

    @GetMapping("/simply/company/{company}")
    public List<SimplyCarModel> getSimplyCarsByCompany(@PathVariable String company) {
        return repository.findAllByCompany(company);
    }

    @GetMapping("/simply/model/{model}")
    public List<SimplyCarModel> getSimplyCarsByModel(@PathVariable String model) {
        return repository.findAllByModel(model);
    }

//    @PostMapping("/postsave")
//    @Transactional
//    public String procerder(@RequestParam("comp") String comp, @RequestParam("mod") String mod) {
//        repository.save(new SimplyCar(comp, mod));
//        return "Done";
//    }

    @PostMapping("/simply/save")
    @Transactional
    public SimplyCarModel saveSimplyCar(@RequestBody SimplyCarModel simplyCar) {
        try {
            if (getCarById(simplyCar.getId()) != null) {
                return null;
            }
            else {
                return repository.save(simplyCar);
            }
        }
        catch (Exception exc) {
            return null;
        }

    }

    @PutMapping("simply/update")
    @Transactional
    public String updateSimplyCar(@RequestBody SimplyCarModel simplyCar) {
        try {
            repository.updateSimplyCar(simplyCar.getId(), simplyCar.getCompany(), simplyCar.getModel());
            return "SimplyCar updated";
        }
        catch (Exception exc){
            return "Not updated. Exception: " + exc.getMessage();
        }
    }

    @DeleteMapping("/simply/delete")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Transactional
    public String deleteSimplyCar(@RequestParam("id") long id) {
        try {
            repository.deleteById(id);
            return "SimplyCar Deleted";
        }
        catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    private SimplyCarModel getCarById(long id) {
        return repository.findById(id);
    }
}
