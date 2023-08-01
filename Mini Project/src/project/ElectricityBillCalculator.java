package project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Scanner;

public class ElectricityBillCalculator {
    public static void main(String[] args) {
        try {
            // Encapsulation and Abstraction: Establish the connection to the MySQL database
            String url = "jdbc:mysql://localhost:3306/EB_bill"; 
            String username = "root"; 
            String password = "120624"; 
            Connection connection = DriverManager.getConnection(url, username, password);

            Scanner scanner = new Scanner(System.in);

            int choice;
            do {
                // Encapsulation: Display menu options
                System.out.println("Welcome To POWERBILLPRO");
                System.out.println("・‥…━━━━━━━☆☆━━━━━━━…‥・");
                System.out.println("Choose A Menu:");
                System.out.println("1. Add a new customer");
                System.out.println("2. Generate bill");
                System.out.println("3. View customer details");
                System.out.println("4. View bill details");
                System.out.println("5. Update payment status");
                System.out.println("6. Exit");
                System.out.println("・‥…━━━━━━━☆☆━━━━━━━…‥・");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        // Inheritance and Polymorphism: Add a new customer
                        Customer newCustomer = Customer.addNewCustomer(scanner);
                        newCustomer.insertPerson(connection);
                        break;
                    case 2:
                        // Inheritance and Polymorphism: Generate bill
                        Bill newBill = new Bill();
                        newBill.generateBill(connection, scanner);
                        break;
                    case 3:
                        // Inheritance and Polymorphism: View customer details
                        Customer customer = new Customer();
                        customer.viewCustomerDetails(connection, scanner);
                        break;
                    case 4:
                        // Inheritance and Polymorphism: View bill details
                        Bill bill = new Bill();
                        bill.viewBillDetails(connection, scanner);
                        break;
                    case 5:
                        // Inheritance and Polymorphism: Update payment status
                        Bill.updatePaymentStatus(connection, scanner);
                        break;
                    case 6:
                        System.out.println("Exiting... Thank You");
                        break;
                    default:
                        System.out.println("Invalid choice. Try again.");
                }
            } while (choice != 6);

            scanner.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
