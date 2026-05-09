<?php
require_once "datos.php";

echo 'Los datos de la tabla usuarios son: <br>';

    for ($i = 0; $i< count($usuarios); $i++){
        echo '| ID: '. $usuarios[$i]->id_usuario . ' | Nombre: ' . $usuarios[$i]->nombre . ' | Correo: ' . $usuarios[$i]->correo . ' | Contraseña: ' . $usuarios[$i]->contraseña . ' |<br>';
    }

?>