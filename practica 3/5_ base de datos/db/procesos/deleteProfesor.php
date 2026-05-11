<?php
require_once "../datos.php";

$id_profesor = $_POST["id_profesor"];

function deleteProfesor($id_profesor){
    global $pdo;
    $sql = "DELETE FROM profesores WHERE id_profesor = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $id_profesor
    ]);

    return;
}

deleteProfesor($id_profesor);

?>