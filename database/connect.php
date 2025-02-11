<?php

$servername = "be6sou9vfgjthfj5pnsp-mysql.services.clever-cloud.com";
$username = "ue2xon9dk2lx29o5";
$password = "3S9e95fZGGHWy7XDKaVj";
$dbname = "be6sou9vfgjthfj5pnsp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];

// Insert the data into the database
$sql = "INSERT INTO Contact (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
