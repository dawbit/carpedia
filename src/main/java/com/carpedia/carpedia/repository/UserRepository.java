package com.carpedia.carpedia.repository;

import com.carpedia.carpedia.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {

    UserModel findById(long id);

}