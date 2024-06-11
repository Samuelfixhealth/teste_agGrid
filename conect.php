<?php
$servename = "localhost";
$username =  "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servename,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Erro ao conectar". $conn->connect_error);
} 
