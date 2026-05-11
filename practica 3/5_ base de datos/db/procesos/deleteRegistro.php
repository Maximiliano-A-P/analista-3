<?php
require_once "../datos.php";

$id_registro = $_POST["id_registro"];

function deleteRegistro($id_registro){
    global $pdo;
    $sql = "DELETE FROM registros WHERE id_registro = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $id_registro
    ]);

    return;
}

deleteRegistro($id_registro);

?>