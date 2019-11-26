package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.SegmentModel;
import com.carpedia.carpedia.repository.SegmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin
public class SegmentController {

    @Autowired
    EntityManager entityManager;

    @Autowired
    SegmentRepository segment;

//    @RequestMapping("/segment/save")
//    public String process(){
//        // save a single Segment
//        segment.save(new SegmentModel("A"));
//        segment.save(new SegmentModel("B"));
//        segment.save(new SegmentModel("C"));
//        return "Done";
//    }

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

    @PostMapping("/segment/save")
    @Transactional
    public String saveSegment(@RequestBody SegmentModel segmentModel) {
        try {
            if (getSegmentByIdForSave(segmentModel.getId()) != null || doesSegmentExist(segmentModel.getName()) ) {
                return "Segment already exists, or incorrect input format";
            } else {
                segment.save(segmentModel);
                return "Segment saved";
            }
        } catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    @PutMapping("segment/update")
    @Transactional
    public String updateSegment(@RequestBody SegmentModel segmentModel) {
        try {
            entityManager.createQuery("UPDATE SegmentModel segmentModel " +
                    "SET segmentModel.name=?2 WHERE segmentModel.id=?1")
                    // WHERE simplyCar.id=?3
                    .setParameter(1, segmentModel.getId())
                    .setParameter(2, segmentModel.getName())
                    .executeUpdate();
            return "Segment updated";
        }
        catch (Exception exc){
            return "Not updated. Exception: " + exc.getMessage();
        }
    }

    @DeleteMapping("/segment/delete")
    @Transactional
    public String deleteSegment(@RequestParam("id") long id) {
        try {
            segment.deleteById(id);
            return "Segment Deleted";
        } catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    private SegmentModel getSegmentByIdForSave(long id) {
        return segment.findById(id);
    }

    private boolean doesSegmentExist(String name) {
        return (segment.findByName(name) != null);
    }

}
