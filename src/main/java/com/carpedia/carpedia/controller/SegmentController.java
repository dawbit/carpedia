package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.SegmentModel;
import com.carpedia.carpedia.repository.SegmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class SegmentController {

    @Autowired
    SegmentRepository segment;

    @RequestMapping("/segment/save")
    public String process(){
        // save a single Segment
        segment.save(new SegmentModel("A"));
        segment.save(new SegmentModel("B"));
        segment.save(new SegmentModel("C"));
        return "Done";
    }

    @GetMapping("/segment")
    public List<SegmentModel> getAllSegments() {
        return (List<SegmentModel>) segment.findAll();
    }

    @GetMapping("/segment/id/{id}")
    public SegmentModel getSegmentById(@PathVariable long id) {
        return segment.findById(id);
    }

    @GetMapping("/segment/name/{name}")
    public List<SegmentModel> getSegmentByName(@PathVariable String name) {
        return segment.findAllByName(name);
    }

}
