package project;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

public abstract class Person {
    // Encapsulation: Protected instance variables
    protected String name;
    protected long phone;
    protected String address;

    // Getters and setters for instance variables
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // Abstract method to insert a new person record into the database
    public abstract void insertPerson(Connection connection) throws SQLException;

    // Encapsulation and Abstraction: Method to create a new person object from user input
    public static Person addNewPerson(Scanner scanner) {
        Person newPerson = new Customer();

        System.out.print("Enter person name: ");
        scanner.nextLine();
        newPerson.setName(scanner.nextLine());

        System.out.print("Enter phone number: ");
        newPerson.setPhone(Long.parseLong(scanner.nextLine()));

        System.out.print("Enter address: ");
        newPerson.setAddress(scanner.nextLine());

        return newPerson;
    }
}
