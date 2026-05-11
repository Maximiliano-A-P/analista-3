<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>carreras</title>
</head>
<body>
<p>Agregar nueva carrera</p>
<form action="procesos/addCarrera.php" method="POST">
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <button>Agregar</button>
</form>
<br><br><br><br>
<p>Editar carrera existente</p>
<form action="procesos/editCarrera.php" method="POST">
    <p>ID de la carrera:</p>
    <input type="number" name="id_carrera" required></input>
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <button>Editar</button>
</form>
<br><br><br><br>
<p>Eliminar carrera existente</p>
<form action="procesos/deleteCarrera.php" method="POST">
    <p>ID de la carrera:</p>
    <input type="number" name="id_carrera" required></input>
    <button>Eliminar</button>
</form>
<br><br><br><br>
</body>
</html>

<?php
require_once "datos.php";

echo 'Los datos de la tabla carreras son: <br>';

    for ($i = 0; $i< count($carreras); $i++){
        echo '| ID: '. $carreras[$i]->id_carrera . ' | Nombre: ' . $carreras[$i]->nombre . ' |<br>';
    }

?>