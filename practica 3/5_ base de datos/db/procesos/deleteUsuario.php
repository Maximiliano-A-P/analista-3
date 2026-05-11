<?php
require_once "../datos.php";

$id_usuario = $_POST["id_usuario"];

function deleteUsuario($id_usuario){
    global $pdo;
    $sql = "DELETE FROM usuarios WHERE id_usuario = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $id_usuario
    ]);

    return;
}

deleteUsuario($id_usuario);

?>