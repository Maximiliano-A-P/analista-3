<?php
require_once "../datos.php";

$nota = $_POST["nota"];
$fecha = $_POST["fecha"];
$id_alumno = $_POST["id_alumno"];
$id_materia = $_POST["id_materia"];

function addRegistro($nota, $fecha, $id_alumno, $id_materia){
    global $pdo;
    $sql = "INSERT INTO registros (nota, fecha, id_alumno, id_materia) VALUES (?,?,?,?)";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nota, 
        $fecha, 
        $id_alumno, 
        $id_materia
    ]);

    return;
}

addRegistro($nota, $fecha, $id_alumno, $id_materia);

?>