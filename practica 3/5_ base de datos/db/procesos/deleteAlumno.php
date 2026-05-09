<?php
require_once "../datos.php";

$id_alumno = $_POST["id_alumno"];

function deleteAlumno($id_alumno){
    global $pdo;
    $sql = "DELETE FROM alumnos WHERE id_alumnos = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $id_alumno
    ]);

    return;
}

deleteAlumno($id_alumno);

?>