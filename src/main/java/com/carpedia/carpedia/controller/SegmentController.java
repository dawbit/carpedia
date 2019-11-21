package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.SegmentModel;
import com.carpedia.carpedia.repository.SegmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SegmentController {

    @Autowired
    SegmentRepository segment;

    @RequestMapping("/savesegment")
    public String process(){
        // save a single Segment
        segment.save(new SegmentModel("A"));
        segment.save(new SegmentModel("B"));
        segment.save(new SegmentModel("C"));
        return "Done";
    }

    @RequestMapping("/segment")
    public String findAll(){
        String result = "";

        for(SegmentModel segment : segment.findAll()){
            result += segment.toString() + "<br>";
        }

        return result;
    }

    @RequestMapping("/segment/id/{id}")
    public String fetchdataById(@PathVariable("id") long id){
        String result = "";
        result = segment.findById(id).toString();
        return result;
    }

    @RequestMapping("/segment/name/{name}")
    public String fetchDataByCompany(@PathVariable("name") String company){
        String result = "";

        for(SegmentModel segment: segment.findByName(company)){
            result += segment.toString() + "<br>";
        }

        return result;
    }

}
