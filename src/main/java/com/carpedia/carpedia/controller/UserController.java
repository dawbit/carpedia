package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.UserModel;
import com.carpedia.carpedia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private EntityManager entityManager;

    @Autowired
    UserRepository user;

//    @RequestMapping("/user/save")
//    public String process(){
//        // save a single User
//        user.save(new UserModel("dawbit","psswd","Dawid","Bitner"));
//        return "Done";
//    }

    @GetMapping("/user")
    public List<UserModel> getAllUsers() {
        return user.findAll();
    }

    @GetMapping("/user/id/{id}")
    public UserModel getUserById(@PathVariable long id) {
        return user.findById(id);
    }

    @GetMapping("/user/login/{login}")
    public List<UserModel> getUserByLogin(@PathVariable String login) {
        return user.findAllByLogin(login);
    }

    @GetMapping("/user/fname/{fname}")
    public List<UserModel> getUserByFname(@PathVariable String fname) {
        return user.findAllByFname(fname);
    }

    @GetMapping("/user/lname/{lname}")
    public List<UserModel> getUserByLname(@PathVariable String lname) {
        return user.findAllByLname(lname);
    }

    @PostMapping("/user/save")
    @Transactional
    public String saveUser(@RequestBody UserModel userModel) {
        try {
            if (getUserByIdForSave(userModel.getId()) != null || doesUserExist(userModel.getLogin()) ) {
                return "User already exists, or incorrect input format";
            } else {
                user.save(userModel);
                return "User saved";
            }
        } catch (Exception exc) {
            return "Not saved. Exception: " + exc.getMessage();
        }
    }

    @PutMapping("user/update")
    @Transactional
    public String updateUser(@RequestBody UserModel userModel) {
        try {
            entityManager.createQuery("UPDATE UserModel userModel " +
                    "SET userModel.password=?2, userModel.fname=?3, userModel.lname=?4 WHERE userModel.id=?1")
                    // WHERE simplyCar.id=?3
                    .setParameter(1, userModel.getId())
                    .setParameter(2, userModel.getPassword())
                    .setParameter(3, userModel.getFname())
                    .setParameter(4, userModel.getLname())
                    .executeUpdate();
            return "User updated";
        }
        catch (Exception exc){
            return "Not updated. Exception: " + exc.getMessage();
        }
    }

    @DeleteMapping("/user/delete")
    @Transactional
    public String deleteUser(@RequestParam("id") long id) {
        try {
            user.deleteById(id);
            return "User Deleted";
        } catch (Exception exc) {
            return "Not deleted. Exception: " + exc.getMessage();
        }
    }

    private UserModel getUserByIdForSave(long id) {
        return user.findById(id);
    }

    private boolean doesUserExist(String login) {
        return (user.findByLogin(login) != null);
    }

}
