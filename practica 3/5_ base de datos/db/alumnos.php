<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>alumnos</title>
</head>
<body>
<p>Agregar nuevo alumno</p>
<form action="db/procesos/addAlumno.php" method="POST">
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Edad:</p>
    <input type="number" name="edad" required></input>
    <p>DNI:</p>
    <input type="number" name="dni" required></input>
    <p>Email:</p>
    <input type="text" name="email" required></input>
    <p>ID Carrera:</p>
    <input type="number" name="id_carrerra" required></input>
    <p>Fecha de nacimiento:</p>
    <input type="text" name="fecha_nacimiento" required></input>
    <button>Agregar</button>
</form>
<br><br><br><br>
<p>Editar alumno existente</p>
<form action="db/procesos/editAlumno.php" method="POST">
    <p>ID del alumno:</p>
    <input type="number" name="id_alumno" required></input>
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Edad:</p>
    <input type="number" name="edad" required></input>
    <p>DNI:</p>
    <input type="number" name="dni" required></input>
    <p>Email:</p>
    <input type="text" name="email" required></input>
    <p>ID Carrera:</p>
    <input type="number" name="id_carrerra" required></input>
    <p>Fecha de nacimiento:</p>
    <input type="text" name="fecha_nacimiento" required></input>
    <button>Editar</button>
</form>
<br><br><br><br>
<p>Eliminar alumno existente</p>
<form action="db/procesos/deleteAlumno.php" method="POST">
    <p>ID del alumno:</p>
    <input type="number" name="id_alumno" required></input>
    <button>Eliminar</button>
</form>
<br><br><br><br>
</body>
</html>

<?php
require_once "datos.php";

echo 'Los datos de la tabla alumnos son: <br>';

    for ($i = 0; $i< count($alumnos); $i++){
        echo '| ID: '. $alumnos[$i]->id_alumnos . ' | Nombre: ' . $alumnos[$i]->nombre . ' | Edad: ' . $alumnos[$i]->edad . ' | DNI: ' . $alumnos[$i]->dni . ' |  Email: ' . $alumnos[$i]->email  . ' | id_carrera: ' . $alumnos[$i]->id_carrera . ' | Fecha de nacimiento: ' . $alumnos[$i]->fecha_nacimiento . ' |<br>';
    }

?>