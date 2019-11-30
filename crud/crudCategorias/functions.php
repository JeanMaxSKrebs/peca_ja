<?php
require_once('../servicos/conection.php');
function insertCategoriasPhp($conection, $array)
{
    try {
        $query = $conection->prepare("insert into categorias(tipo) values (?)");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function alterCategoriasPhp($conection, $array)
{
    try {
        $query = $conection->prepare("update categorias set tipo=? where tipo=?");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaCategoriasPhp($conection)
{
    try {
        $query = $conection->prepare("select * from categorias ORDER BY codigo");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaCategorias_nomePhp($conection, $array)
{
    try {
        $query = $conection->prepare("select * from categorias where tipo=? ORDER BY codigo");
        $query->execute($array);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function busca_alteraPhp($conection, $array)
{
    try {
        $query = $conection->prepare("select * from categorias where tipo=? ORDER BY codigo");
        $query->execute($array);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function deleteCategoriasPhp($conection, $array){
    try{
        $query = $conection->prepare("delete from categorias where tipo=?");
        $result = $query->execute($array);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }

}