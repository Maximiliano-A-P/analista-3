<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>materias</title>
</head>
<body>
<p>Agregar nueva materia</p>
<form action="db/procesos/addMateria.php" method="POST">
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Curso:</p>
    <input type="number" name="curso" required></input>
    <p>ID Profesor:</p>
    <input type="number" name="id_profesor" required></input>
    <p>ID Carrera:</p>
    <input type="number" name="id_carrera" required></input>
    <p>Nota de aprobacion:</p>
    <input type="number" name="nota_aprobacion" required></input>
    <button>Agregar</button>
</form>
<br><br><br><br>
<p>Editar materia existente</p>
<form action="db/procesos/editMateria.php" method="POST">
    <p>ID de la materia:</p>
    <input type="number" name="id_materia" required></input>
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Curso:</p>
    <input type="number" name="curso" required></input>
    <p>ID Profesor:</p>
    <input type="number" name="id_profesor" required></input>
    <p>ID Carrera:</p>
    <input type="number" name="id_carrera" required></input>
    <p>Nota de aprobacion:</p>
    <input type="number" name="nota_aprobacion" required></input>
    <button>Editar</button>
</form>
<br><br><br><br>
<p>Eliminar materia existente</p>
<form action="db/procesos/deleteMateria.php" method="POST">
    <p>ID del materia:</p>
    <input type="number" name="id_materia" required></input>
    <button>Eliminar</button>
</form>
<br><br><br><br>
</body>
</html>

<?php
require_once "datos.php";

echo 'Los datos de la tabla materias son: <br>';

    for ($i = 0; $i< count($materias); $i++){
        echo '| ID: '. $materias[$i]->id_materias . ' | Nombre: ' . $materias[$i]->nombre . ' | Curso: ' . $materias[$i]->curso . ' | id_profesor: ' . $materias[$i]->id_profesor . ' | id_carrera: ' . $materias[$i]->id_carrera . ' | Nota de aprobacion: ' . $materias[$i]->nota_aprobacion . ' |<br>';
    }

?>