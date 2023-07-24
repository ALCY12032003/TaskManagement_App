package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepo;
@Service
public class TaskService {
	@Autowired //extends another class
    TaskRepo stRepo; //reference variable
	
	public Task saveDetails(Task e) {
		return stRepo.save(e);
	}
	public List <Task>getDetails()

{
		return stRepo.findAll();
		
}
	public Task updateDetails(Task e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	public void deleteDetails(int id)
	{
		stRepo.deleteById(id);
	}

}