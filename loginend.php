<?php

header('Content-Type: application/json');
require_once('conn.php');

$user = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='$user' and password='$password'";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // checking the request method
  $result = mysqli_query($sql, $conn);
} else {
  // code...
  echo mysqli_error($conn);
}



?>