<?php
require_once "datos.php";

echo 'Los datos de la tabla registros son: <br>';

    for ($i = 0; $i< count($registros); $i++){
        echo '| ID: '. $registros[$i]->id_nota . ' | Nota: ' . $registros[$i]->nota . ' | Fecha: ' . $registros[$i]->fecha . ' | id_alumno: ' . $registros[$i]->id_alumno . ' | id_materia: ' . $registros[$i]->id_materia . ' |<br>';
    }

?>