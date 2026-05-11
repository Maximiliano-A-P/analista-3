<?php
require_once "../datos.php";

$nombre = $_POST["nombre"];
$email = $_POST["email"];

function addProfesor($nombre, $email){
    global $pdo;
    $sql = "INSERT INTO profesores (nombre, email) VALUES (?,?)";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre, 
        $email, 
    ]);

    return;
}

addProfesor($nombre, $email);

?>