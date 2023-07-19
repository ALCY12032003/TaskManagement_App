package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.model.model;
import com.example.demo.repository.repository;
@Service
public class service {
	@Autowired //extends another class
    repository stRepo; //reference variable
	
	public model saveDetails(model e) {
		return stRepo.save(e);
	}
	public List <model>getDetails()

{
		return stRepo.findAll();
		
}
	public model UpdateDetails(model e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	public void deleteDetails(int id)
	{
		stRepo.deleteById(id);
	}

}