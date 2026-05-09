<?php
require_once "../datos.php";

$id_alumno = $_POST["id_alumno"];
$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$dni = $_POST["dni"];
$email = $_POST["email"];
$id_carrera = $_POST["id_carrera"];
$fecha_nacimiento = $_POST["fecha_nacimiento"];

function editAlumno($id_alumno, $nombre, $edad, $dni, $email, $id_carrera, $fecha_nacimiento){
    global $pdo;
    $sql = "UPDATE alumnos SET $nombre = ?, $edad = ?, $dni = ?, $email = ?, $id_carrera = ?, $fecha_nacimiento = ? WHERE id_alumnos = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre,
        $edad, 
        $dni,  
        $email, 
        $id_carrera, 
        $fecha_nacimiento,
        $id_alumno
    ]);

    return;
}

editAlumno($id_alumno, $nombre, $edad, $dni, $email, $id_carrera, $fecha_nacimiento);

?>