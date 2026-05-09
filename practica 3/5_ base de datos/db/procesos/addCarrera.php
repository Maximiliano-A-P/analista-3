<?php
require_once "../datos.php";

$nombre = $_POST["nombre"];

function addCarrera($nombre){
    global $pdo;
    $sql = "INSERT INTO carreras (nombre) VALUES (?)";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre, 
    ]);

    return;
}

addCarrera($nombre);

?>