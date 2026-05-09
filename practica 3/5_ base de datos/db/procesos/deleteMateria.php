<?php
require_once "../datos.php";

$id_materia = $_POST["id_materia"];

function deleteMateria($id_materia){
    global $pdo;
    $sql = "DELETE FROM materias WHERE id_materia = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $id_materia
    ]);

    return;
}

deleteMateria($id_materia);

?>