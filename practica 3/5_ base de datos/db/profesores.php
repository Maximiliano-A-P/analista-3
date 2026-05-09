<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profesores</title>
</head>
<body>
<p>Agregar nuevo profesor</p>
<form action="db/procesos/addProfesor.php" method="POST">
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Email:</p>
    <input type="text" name="email" required></input>
    <button>Agregar</button>
</form>
<br><br><br><br>
<p>Editar profesor existente</p>
<form action="db/procesos/editProfesor.php" method="POST">
    <p>ID del profesor:</p>
    <input type="number" name="id_profesor" required></input>
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Email:</p>
    <input type="text" name="email" required></input>
    <button>Editar</button>
</form>
<br><br><br><br>
<p>Eliminar profesor existente</p>
<form action="db/procesos/deleteProfesor.php" method="POST">
    <p>ID del profesor:</p>
    <input type="number" name="id_profesor" required></input>
    <button>Eliminar</button>
</form>
<br><br><br><br>
</body>
</html>

<?php
require_once "datos.php";

echo 'Los datos de la tabla Profesores son: <br>';

    for ($i = 0; $i< count($profesores); $i++){
        echo '| ID: '. $profesores[$i]->id_profesor . ' | Nombre: ' . $profesores[$i]->nombre . ' | Email: ' . $profesores[$i]->email . ' |<br>';
    }

?>