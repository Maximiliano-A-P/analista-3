<?php
require_once "../datos.php";

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$contraseña = $_POST["contraseña"];

function addUsuario($nombre, $correo, $contraseña){
    global $pdo;
    $sql = "INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?,?,?)";
    $statement = $pdo->prepare($sql);

    $statement->execute([
        $nombre, 
        $correo, 
        $contraseña
    ]);

    return;
}

addUsuario($nombre, $correo, $contraseña);

?>