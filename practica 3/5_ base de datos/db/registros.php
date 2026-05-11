<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registros</title>
</head>
<body>
<p>Agregar nuevo registro</p>
<form action="procesos/addRegistos.php" method="POST">
    <p>Nota:</p>
    <input type="number" step="any" name="nota" required></input>
    <p>Fecha:</p>
    <input type="text" name="fecha" required></input>
    <p>ID Alumno:</p>
    <input type="number" name="id_alumno" required></input>
    <p>ID Materia:</p>
    <input type="number" name="id_materia" required></input>
    <button>Agregar</button>
</form>
<br><br><br><br>
<p>Editar registro existente</p>
<form action="procesos/editRegistro.php" method="POST">
    <p>ID de la nota:</p>
    <input type="number" name="id_nota" required></input>
    <p>Nota:</p>
    <input type="number" step="any" name="nota" required></input>
    <p>Fecha:</p>
    <input type="text" name="fecha" required></input>
    <p>ID Alumno:</p>
    <input type="number" name="id_alumno" required></input>
    <p>ID Materia:</p>
    <input type="number" name="id_materia" required></input>
    <button>Editar</button>
</form>
<br><br><br><br>
<p>Eliminar registro existente</p>
<form action="procesos/deleteRegistro.php" method="POST">
    <p>ID del registro:</p>
    <input type="number" name="id_registro" required></input>
    <button>Eliminar</button>
</form>
<br><br><br><br>
</body>
</html>
<?php
require_once "datos.php";

echo 'Los datos de la tabla registros son: <br>';

    for ($i = 0; $i< count($registros); $i++){
        echo '| ID: '. $registros[$i]->id_nota . ' | Nota: ' . $registros[$i]->nota . ' | Fecha: ' . $registros[$i]->fecha . ' | id_alumno: ' . $registros[$i]->id_alumno . ' | id_materia: ' . $registros[$i]->id_materia . ' |<br>';
    }

?>