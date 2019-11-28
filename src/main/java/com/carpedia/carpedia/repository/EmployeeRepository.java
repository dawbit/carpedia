package com.carpedia.carpedia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import net.guides.springboot2.springboot2jpacrudexample.model.Employee;
import com.carpedia.carpedia.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
