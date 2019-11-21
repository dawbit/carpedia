package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.EngineModel;
import com.carpedia.carpedia.repository.EngineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EngineController {

    @Autowired
    EngineRepository engine;

    @RequestMapping("/saveengine")
    public String process(){
        // save a single Engine
        engine.save(new EngineModel("TU3JP", 75, 1360));
        engine.save(new EngineModel("M30B30", 188, 3000));
        engine.save(new EngineModel("HR12DE", 60, 1180));
        engine.save(new EngineModel("MR18DE", 126, 1750));

        return "Done";
    }

    @RequestMapping("/engine")
    public String findAll(){
        String result = "";

        for(EngineModel engine : engine.findAll()){
            result += engine.toString() + "<br>";
        }

        return result;
    }

    @RequestMapping("/engine/id/{id}")
    public String fetchdataById(@PathVariable("id") long id){
        String result = "";
        result = engine.findById(id).toString();
        return result;
    }

    @RequestMapping("/engine/power/{power}")
    public String fetchDataByPower(@PathVariable("power") int power){
        String result = "";

        //result += power. + "<br>";
        for(EngineModel engine: engine.findByPower(power)) {
            result += engine.toString() + "<br>";
        }

        return result;
    }

    @RequestMapping("/engine/capacity/{capacity}")
    public String fetchDataByCompany(@PathVariable("capacity") float capacity){
        String result = "";

        for(EngineModel engine: engine.findByCapacity(capacity)){
            result += engine.toString() + "<br>";
        }

        return result;
    }

}
