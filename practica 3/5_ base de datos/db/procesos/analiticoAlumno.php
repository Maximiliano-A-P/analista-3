<?php
require_once "../datos.php";

$id_alumno = $_POST['id_alumno'];

function getAnalitico($id_alumno){
    global $pdo;
    $sql = "SELECT 
                materias.nombre, 
                registros.nota, 
                registros.fecha, 
                materias.curso 
            FROM alumnos 
            INNER JOIN carreras ON alumnos.id_carrera = carreras.id_carrera
            INNER JOIN materias ON carreras.id_carrera = materias.id_carrera
            LEFT JOIN registros ON materias.id_materias = registros.id_materia 
                AND alumnos.id_alumnos = registros.id_alumno
            WHERE alumnos.id_alumnos = :id_alumno
            ORDER BY materias.curso ASC, materias.nombre ASC";

    $statement = $pdo->prepare($sql);
    $statement->execute(['id_alumno' => $id_alumno]);

    $datos = $statement->fetchAll(PDO::FETCH_OBJ);
    return $datos;
}

$data = getAnalitico($id_alumno);

for ($i=0; $i< count($data); $i++){
    echo 'Materia: '. $data[$i]->nombre . ' | Nota: ' . $data[$i]->nota . ' |  Fecha: ' . $data[$i]->fecha . ' | Curso: ' . $data[$i]->curso . ' |<br>';
}

?>
