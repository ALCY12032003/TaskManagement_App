package com.example.demo.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "datainfo")
public class Task {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int taskid;
    private String type;
    private String name;
    private String description;
    private String category;
    private String status;
    private LocalDate startdate;
    private LocalDate enddate;
    private String priority;
    private String notification;
    
public Task()
{
	
}

public int getTaskid() {
	return taskid;
}

public void setTaskid(int taskid) {
	this.taskid = taskid;
}

public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}

public String getCategory() {
	return category;
}

public void setCategory(String category) {
	this.category = category;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public LocalDate getStartdate() {
	return startdate;
}

public void setStartdate(LocalDate startdate) {
	this.startdate = startdate;
}

public LocalDate getEnddate() {
	return enddate;
}

public void setEnddate(LocalDate enddate) {
	this.enddate = enddate;
}

public String getPriority() {
	return priority;
}

public void setPriority(String priority) {
	this.priority = priority;
}

public String getNotification() {
	return notification;
}

public void setNotification(String notification) {
	this.notification = notification;
}

public Task(int taskid, String type, String name, String description, String category, String status,
		LocalDate startdate, LocalDate enddate, String priority, String notification) {
	super();
	this.taskid = taskid;
	this.type = type;
	this.name = name;
	this.description = description;
	this.category = category;
	this.status = status;
	this.startdate = startdate;
	this.enddate = enddate;
	this.priority = priority;
	this.notification = notification;
}

    
}
