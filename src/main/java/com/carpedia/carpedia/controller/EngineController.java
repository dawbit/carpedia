package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.EngineModel;
import com.carpedia.carpedia.repository.EngineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EngineController {

    @Autowired
    EngineRepository engine;

    @RequestMapping("/engine/save")
    public String process(){
        // save a single Engine
        engine.save(new EngineModel("TU3JP", 75, 1360));
        engine.save(new EngineModel("M30B30", 188, 3000));
        engine.save(new EngineModel("HR12DE", 60, 1180));
        engine.save(new EngineModel("MR18DE", 126, 1750));

        return "Done";
    }

    @GetMapping("/engine")
    public List<EngineModel> getAllEngines() {
        return (List<EngineModel>) engine.findAll();
    }

    @GetMapping("/engine/id/{id}")
    public List<EngineModel> getEngineById(@PathVariable long id) {
        return (List<EngineModel>) engine.findById(id);
    }

    @GetMapping("/engine/name/{name}")
    public List<EngineModel> getEngineByName(@PathVariable String name) {
        return engine.findAllByName(name);
    }

    @GetMapping("/engine/power/{power}")
    public List<EngineModel> getEngineByPower(@PathVariable int power) {
        return engine.findAllByPower(power);
    }

    @GetMapping("/engine/capacity/{capacity}")
    public List<EngineModel> getEngineByCapacity(@PathVariable int capacity) {
        return engine.findAllByCapacity(capacity);
    }

}
