package com.springforgraphql.practice.controller;

import com.springforgraphql.practice.dao.EmployeeRepository;
import com.springforgraphql.practice.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class EmployeeController {
    @Autowired
    private EmployeeRepository repo;

    @QueryMapping
    Iterable<Employee> employees(){
        return repo.findAll();
    }

    @QueryMapping
    Optional<Employee> employee(@Argument int id){
        return repo.findById(id);
    }

    @MutationMapping
    Employee addEmployee(@Argument String firstName, @Argument String lastName, @Argument String email  ){
     Employee e = new Employee(firstName,lastName,email);
     repo.save(e);
     return e;
    }

    @MutationMapping
    String deleteEmployee(@Argument int id){
        Optional<Employee> e = repo.findById(id);
        if(e.isPresent()){
            repo.deleteById(id);
            return "employee deleted";
        }
        else{
            return "employee not present";
        }
    }
    @MutationMapping
    String
    updateEmployee(@Argument int id,@Argument String firstName, @Argument String lastName, @Argument String email) {
        Optional<Employee> e = repo.findById(id);
//        if(e.isPresent()){
//            Employee emp = new Employee(firstName,lastName,email);
//            repo.saveById();
//            return "employee updated";
//        }
//        else{
//            return "employee not present";
//        }
        e.ifPresent(e1 -> {
            e1.setFirstName(firstName);
            e1.setLastName(lastName);
            e1.setEmail(email);

            repo.save(e1);
        });

        return "e1";
    }

}
