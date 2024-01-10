<?php

$host = "localhost";
$user = "id21592344_abdulmuhd";
$pass = "Abdulmuhd@1021";
$db = "id21592344_mydb";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
  echo mysqli_connect_error();
} else {
  echo 'Database connected';
}


?>