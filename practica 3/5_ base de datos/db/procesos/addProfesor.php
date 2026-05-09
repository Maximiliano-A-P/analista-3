<?php
require_once "../datos.php";

$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$dni = $_POST["dni"];
$email = $_POST["email"];
$id_carrera = $_POST["id_carrera"];
$fecha_nacimiento = $_POST["fecha_nacimiento"];

function addAlumno($nombre, $edad, $dni, $email, $id_carrera, $fecha_nacimiento){
    global $pdo;
    $sql = "INSERT INTO alumnos (nombre, edad, dni, email, id_carrera, fecha_nacimiento) VALUES (?,?,?,?,?,?)";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre, 
        $edad, 
        $dni, 
        $email, 
        $id_carrera, 
        $fecha_nacimiento
    ]);

    return;
}

addAlumno($nombre, $edad, $dni, $email, $id_carrera, $fecha_nacimiento);

?>