<?php
require_once "../datos.php";

$id_usuario = $_POST["id_usuario"];
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$contraseña = $_POST["contraseña"];

function editUsuario($id_usuario, $nombre, $correo, $contraseña){
    global $pdo;
    $sql = "UPDATE usuarios SET $nombre = ?, $correo = ?, $contraseña = ? WHERE id_usuario = ?";
    $statement = $pdo->prepare($sql);

    $statement->execute([
       $nombre, 
       $correo, 
       $contraseña,
       $id_usuario
    ]);

    return;
}

editUsuario($id_usuario, $nombre, $correo, $contraseña);

?>