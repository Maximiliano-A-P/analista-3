<?php
?>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>base de datos</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<form action="db/procesos/login.php" method="POST">
    <p>Username:</p>
    <input type="text" name="username" required></input>
    <p>Password:</p>
    <input type="text" name="password" required></input>
    <button>Login</button>
</form>
</body>
</html>