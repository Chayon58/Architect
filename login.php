<?php
 include "connect.php";
$email = $_POST["email"];
echo $email;
$pass = $_POST["password"];
$country = $_POST["country"];
$name = $_POST["name"];

$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO login (name,email, country,password) VALUES ('$name','$email', '$country','$hashed_pass')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);

?>