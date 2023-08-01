package project;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Customer extends Person {
    // Encapsulation: Private instance variables
    private int customerNum;
    private long aadharNumber;

    // Getters and setters for instance variables
    public int getCustomerNum() {
        return customerNum;
    }

    public void setCustomerNum(int customerNum) {
        this.customerNum = customerNum;
    }

    public long getAadharNumber() {
        return aadharNumber;
    }

    public void setAadharNumber(long aadharNumber) {
        this.aadharNumber = aadharNumber;
    }

    // Encapsulation and Abstraction: Method to insert a new customer record into the database
    @Override
    public void insertPerson(Connection connection) throws SQLException {
        // Check if a customer with the same Aadhar number already exists
        if (isCustomerExists(connection, aadharNumber)) {
            System.out.println("Customer with Aadhar number " + aadharNumber + " already exists.");
            return;
        }

        String insertCustomerQuery = "INSERT INTO customer (name, phone, address, aadhar_number) VALUES (?, ?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertCustomerQuery)) {
            preparedStatement.setString(1, name);
            preparedStatement.setLong(2, phone);
            preparedStatement.setString(3, address);
            preparedStatement.setLong(4, aadharNumber);
            preparedStatement.executeUpdate();
            System.out.println("New customer added successfully!");
        }
    }

    // Encapsulation and Abstraction: Method to check if a customer with the same Aadhar number already exists in the database
    private boolean isCustomerExists(Connection connection, long aadharNumber) throws SQLException {
        String selectCustomerQuery = "SELECT * FROM customer WHERE aadhar_number = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(selectCustomerQuery)) {
            preparedStatement.setLong(1, aadharNumber);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                return resultSet.next();
            }
        }
    }

    // Encapsulation and Abstraction: Method to create a new customer object from user input
    public static Customer addNewCustomer(Scanner scanner) {
        Customer newCustomer = new Customer();

        System.out.print("Enter person name: ");
        scanner.nextLine();
        newCustomer.setName(scanner.nextLine());

        System.out.print("Enter phone number: ");
        newCustomer.setPhone(Long.parseLong(scanner.nextLine()));

        System.out.print("Enter address: ");
        newCustomer.setAddress(scanner.nextLine());

        System.out.print("Enter Aadhar number: ");
        newCustomer.setAadharNumber(Long.parseLong(scanner.nextLine()));

        return newCustomer;
    }

    // Encapsulation and Abstraction: Method to view customer details for a given customer ID
    public void viewCustomerDetails(Connection connection, Scanner scanner) throws SQLException {
        System.out.print("Enter customer ID: ");
        int customerId = scanner.nextInt();

        String selectCustomerQuery = "SELECT * FROM customer WHERE customer_num  = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(selectCustomerQuery)) {
            preparedStatement.setInt(1, customerId);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {

                if (resultSet.next()) {
                    System.out.println("Customer Details:");
                    System.out.println("Customer ID: " + resultSet.getInt("customer_num"));
                    System.out.println("Name: " + resultSet.getString("name"));
                    System.out.println("Phone: " + resultSet.getLong("phone"));
                    System.out.println("Address: " + resultSet.getString("address"));
                    System.out.println("Aadhar Number: " + resultSet.getLong("aadhar_number"));
                    System.out.println("-----------------------------------");
                } else {
                    System.out.println("Customer not found with ID: " + customerId);
                }
            }
        }
    }
}
