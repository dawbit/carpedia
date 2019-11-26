package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<UserModel, Long> {

    UserModel findById(long id);
    UserModel findByLogin(String login);

    List<UserModel> findAllByLogin(String login);
    List<UserModel> findAllByFname(String fname);
    List<UserModel> findAllByLname(String lname);

}