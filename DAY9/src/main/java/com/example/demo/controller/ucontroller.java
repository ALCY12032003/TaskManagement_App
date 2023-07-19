package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.user;
import com.example.demo.service.uservice;
@CrossOrigin
@RestController
public class ucontroller {
    @Autowired
    private uservice apiService;

    @GetMapping("/show")
    public List<user> getAllStudents() {
        return apiService.getAllStudents();
    }

    @PostMapping("/add")
    public boolean createStudent(@RequestBody user student) {
        return apiService.createStudent(student);
    }

    @PutMapping("/edit/{id}") // Added @PathVariable annotation
    public user updateStudent(@RequestBody user student, @PathVariable Integer id) {
        return apiService.updateStudent(id, student);
    }

    @DeleteMapping("/remove/{id}")
    public boolean deleteStudent(@PathVariable Integer id) {
        return apiService.deleteStudent(id);
    }
}
