<?php
require_once "../datos.php";

$id_profesor = $_POST["id_profesor"];
$nombre = $_POST["nombre"];
$email = $_POST["email"];

function editProfesor($id_profesor, $nombre, $email){
    global $pdo;
    $sql = "UPDATE profesores SET $nombre = ?, $email = ? WHERE id_profesor = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre, 
        $email,
        $id_profesor
    ]);

    return;
}

editProfesor($id_alumno, $nombre, $email);

?>