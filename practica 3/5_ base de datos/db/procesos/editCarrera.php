<?php
require_once "../datos.php";

$id_carrera = $_POST["id_carrera"];
$nombre = $_POST["nombre"];


function editCarrera($id_carrera, $nombre){
    global $pdo;
    $sql = "UPDATE carreras SET $nombre = ? WHERE id_carrera = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre,
        $id_carrera
    ]);

    return;
}

editCarrera($id_carrera, $nombre);

?>