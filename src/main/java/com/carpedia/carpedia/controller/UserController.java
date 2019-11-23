package com.carpedia.carpedia.controller;

import com.carpedia.carpedia.model.UserModel;
import com.carpedia.carpedia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository user;

    @RequestMapping("/user/save")
    public String process(){
        // save a single User
        user.save(new UserModel("dawbit","psswd","Dawid","Bitner"));
        return "Done";
    }

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

}
