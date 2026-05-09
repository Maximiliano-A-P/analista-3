<?php
require_once "../datos.php";

$nombre = $_POST["nombre"];
$curso = $_POST["curso"];
$id_profesor = $_POST["id_profesor"];
$id_carrera = $_POST["id_carrera"];
$nota_aprobacion = $_POST["nota_aprobacion"];

function addMateria($nombre, $curso, $id_profesor, $id_carrera, $nota_aprobacion){
    global $pdo;
    $sql = "INSERT INTO materias (nombre, curso, id_profesor, id_carrera, nota_aprobacion) VALUES (?,?,?,?,?)";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre, 
        $curso, 
        $id_profesor, 
        $id_carrera, 
        $nota_aprobacion
    ]);

    return;
}

addMateria($nombre, $curso, $id_profesor, $id_carrera, $nota_aprobacion);

?>