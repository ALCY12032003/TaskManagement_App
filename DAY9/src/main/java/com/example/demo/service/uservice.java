package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.user;
import com.example.demo.repository.urepo;
@Service
public class uservice {
    @Autowired
    private urepo studentRepository;
    public List<user> getAllStudents() {
        return studentRepository.findAll();
    }
    public user getStudentById(Integer id) {
        return studentRepository.findById(id).get();
    }
    public boolean createStudent(user student) {
        return studentRepository.save(student) != null? true:false;
    }
    public user updateStudent(Integer id, user student) {
        user stu = studentRepository.findById(id).get();
        stu.setName(student.getName());
        stu.setNumber(student.getNumber());
        stu.setPassword(student.getPassword());
        stu.setEmail(student.getEmail());
        stu.setId(student.getId());
      return studentRepository.save(stu);
    }
    public boolean deleteStudent(Integer id) {
        if(studentRepository.findById(id).isPresent()){
            studentRepository.deleteById(id);
          return true;
        } 
        return false;
    }
}
