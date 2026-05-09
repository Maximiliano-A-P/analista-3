<?php
//definicion db
$host = 'localhost';
$db= 'practica3';
$user = 'root';
$password = 'root';

$dsn = "mysql:host=$host;dbname=$db;charset=UTF8";
$pdo = new PDO($dsn, $user, $password);


//uso

function getUsuarios(){
    global $pdo;
    $sql = "SELECT * FROM usuarios";
    $statement = $pdo->query($sql);

    $datos = $statement->fetchAll(PDO::FETCH_OBJ);
    return $datos;
}

$usuarios = getUsuarios();

function getCarreras(){
    global $pdo;
    $sql = "SELECT * FROM carreras";
    $statement = $pdo->query($sql);

    $datos = $statement->fetchAll(PDO::FETCH_OBJ);
    return $datos;
}

$carreras = getCarreras();

function getProfesores(){
    global $pdo;
    $sql = "SELECT * FROM profesores";
    $statement = $pdo->query($sql);

    $datos = $statement->fetchAll(PDO::FETCH_OBJ);
    return $datos;
}

$profesores = getProfesores();

function getAlumnos(){
    global $pdo;
    $sql = "SELECT * FROM alumnos";
    $statement = $pdo->query($sql);

    $datos = $statement->fetchAll(PDO::FETCH_OBJ);
    return $datos;
}

$alumnos = getAlumnos();

function getMaterias(){
    global $pdo;
    $sql = "SELECT * FROM materias";
    $statement = $pdo->query($sql);

    $datos = $statement->fetchAll(PDO::FETCH_OBJ);
    return $datos;
}

$materias = getMaterias();

function getRegistros(){
    global $pdo;
    $sql = "SELECT * FROM registros";
    $statement = $pdo->query($sql);

    $datos = $statement->fetchAll(PDO::FETCH_OBJ);
    return $datos;
}

$registros = getRegistros();

?>