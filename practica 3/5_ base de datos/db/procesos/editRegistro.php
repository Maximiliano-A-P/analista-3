<?php
require_once "../datos.php";

$id_registro = $_POST["id_registro"];
$nota = $_POST["nota"];
$fecha = $_POST["fecha"];
$id_alumno = $_POST["id_alumno"];
$id_materia = $_POST["id_materia"];

function editRegistro($id_registro, $nota, $fecha, $id_alumno, $id_materia){
    global $pdo;
    $sql = "UPDATE registros SET $nota = ?, $fecha = ?, $id_alumno = ?, $id_materia = ? WHERE id_registro = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nota, 
        $fecha, 
        $id_alumno, 
        $id_materia,
        $id_registro
    ]);

    return;
}

editRegistro($id_registro, $nota, $fecha, $id_alumno, $id_materia);

?>