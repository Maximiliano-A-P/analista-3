<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>usuarios</title>
</head>
<body>
<p>Agregar nuevo usuario</p>
<form action="procesos/addUsuario.php" method="POST">
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Correo:</p>
    <input type="text" name="correo" required></input>
    <p>Contraseña:</p>
    <input type="text" name="contraseña" required></input>
    <button>Agregar</button>
</form>
<br><br><br><br>
<p>Editar usuario existente</p>
<form action="procesos/editUsuario.php" method="POST">
    <p>ID del usuario:</p>
    <input type="number" name="id_usuario" required></input>
    <p>Nombre:</p>
    <input type="text" name="nombre" required></input>
    <p>Correo:</p>
    <input type="text" name="correo" required></input>
    <p>Contraseña:</p>
    <input type="text" name="contraseña" required></input>
    <button>Editar</button>
</form>
<br><br><br><br>
<p>Eliminar usuario existente</p>
<form action="procesos/deleteUsuario.php" method="POST">
    <p>ID del usuario:</p>
    <input type="number" name="id_usuario" required></input>
    <button>Eliminar</button>
</form>
<br><br><br><br>
</body>
</html>

<?php
require_once "datos.php";

echo 'Los datos de la tabla usuarios son: <br>';

    for ($i = 0; $i< count($usuarios); $i++){
        echo '| ID: '. $usuarios[$i]->id_usuario . ' | Nombre: ' . $usuarios[$i]->nombre . ' | Correo: ' . $usuarios[$i]->correo . ' | Contraseña: ' . $usuarios[$i]->contraseña . ' |<br>';
    }

?>