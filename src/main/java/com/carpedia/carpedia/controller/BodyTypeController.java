package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.BodyTypeModel;
import com.carpedia.carpedia.repository.BodyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@CrossOrigin
@RestController
public class BodyTypeController {

    @Autowired
    EntityManager entityManager;

    @Autowired
    BodyTypeRepository bodytype;

//    @RequestMapping("/bodytype/save")
//    public String process(){
//        // save a single BodyType
//        bodytype.save(new BodyTypeModel("Sedan"));
//        bodytype.save(new BodyTypeModel("Kombi"));
//        bodytype.save(new BodyTypeModel("Hatchback"));
//        return "Done";
//    }

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

    @PostMapping("/bodytype/save")
    @Transactional
    public String saveBodyType(@RequestBody BodyTypeModel bodyTypeModel) {
        try {
            if (getBodyTypeByIdForSave(bodyTypeModel.getId()) != null || doesBodyTypeExist(bodyTypeModel.getName()) ) {
                return "Body type already exists, or incorrect input format";
            }
            else {
                bodytype.save(bodyTypeModel);
                return "Body type saved";
            }
        } catch (Exception exc) {
            return "Not saveed. Exception: " + exc.getMessage();
        }
    }

    @PutMapping("bodytype/update")
    @Transactional
    public String updateBodyType(@RequestBody BodyTypeModel bodytypeModel) {
        try {
            entityManager.createQuery("UPDATE BodyTypeModel bodytypeModel " +
                    "SET bodytypeModel.name=?2 WHERE bodytypeModel.id=?1")
                    .setParameter(1, bodytypeModel.getId())
                    .setParameter(2, bodytypeModel.getName())
                    .executeUpdate();
            return "Body type updated";
        }
        catch (Exception exc){
            return "Not updated. Exception: " + exc.getMessage();
        }
    }

    @DeleteMapping("/bodytype/delete")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Transactional
    public String deleteBodyType(@RequestParam("id") long id) {
        try {
            bodytype.deleteById(id);
            return "Body type Deleted";
        } catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    private BodyTypeModel getBodyTypeByIdForSave(long id) {
        return bodytype.findById(id);
    }

    private boolean doesBodyTypeExist(String name) {
        return (bodytype.findByName(name) != null);
    }

}