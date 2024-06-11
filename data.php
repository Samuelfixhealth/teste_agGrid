<?php

require_once("conect.php");

// Consultar os dados
$sql = "SELECT * FROM usuarios LIMIT 150000";
$result = mysqli_query($conn, $sql);

$data = array();
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}
// Enviar os dados formatados
echo json_encode($data);

$conn->close();


