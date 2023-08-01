package project;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

// Interface for billable objects, defining contract for generating and viewing bills.
public interface Billable {

    // Abstract method to generate a bill for a customer based on the provided connection and user input.
    void generateBill(Connection connection, Scanner scanner) throws SQLException;

    // Abstract method to view bill details for a customer based on the provided connection and user input.
    void viewBillDetails(Connection connection, Scanner scanner) throws SQLException;
}
