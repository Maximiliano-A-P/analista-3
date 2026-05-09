<?php
require_once "../datos.php";

$id_materia = $_POST["id_materia"];
$nombre = $_POST["nombre"];
$curso = $_POST["curso"];
$id_profesor = $_POST["id_profesor"];
$id_carrera = $_POST["id_carrera"];
$nota_aprobacion = $_POST["nota_aprobacion"];

function editMateria($id_materia, $nombre, $curso, $id_profesor, $id_carrera, $nota_aprobacion){
    global $pdo;
    $sql = "UPDATE materia SET $nombre = ?, $curso = ?, $id_profesor = ?, $id_carrera = ?, $nota_aprobacion = ? WHERE id_materia = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre, 
        $curso, 
        $id_profesor, 
        $id_carrera, 
        $nota_aprobacion,
        $id_materia
    ]);

    return;
}

editMateria($id_materia, $nombre, $curso, $id_profesor, $id_carrera, $nota_aprobacion);

?>