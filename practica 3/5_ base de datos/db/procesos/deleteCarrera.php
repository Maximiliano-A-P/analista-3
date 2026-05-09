<?php
require_once "../datos.php";

$id_carrera = $_POST["id_carrera"];

function deleteCarrrera($id_carrera){
    global $pdo;
    $sql = "DELETE FROM carreras WHERE id_carrera = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $id_carrera
    ]);

    return;
}

deleteCarrera($id_carrera);

?>