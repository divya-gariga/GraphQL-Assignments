package com.springforgraphql.practice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springforgraphql.practice.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {


}











