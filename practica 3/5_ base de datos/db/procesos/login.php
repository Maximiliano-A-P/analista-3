<?php
require_once "../datos.php";
$username = $_POST["username"];
$password = $_POST["password"];

for ($i = 0; $i < count($usuarios); $i++){
    if ($username == $usuarios[$i]->nombre){
        if ($password == $usuarios[$i]->contraseña){
            session_start();
            $_SESSION['usuario_validado'] = TRUE;
            header("Location: ../../page.php");
            exit();
        }
    }
}

echo 'datos erroneos <br>';
echo '<a href="../../index.php">Volver</a>';

?>