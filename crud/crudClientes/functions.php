<?php
require_once('conection.php');
function insertClientePhp($conection, $array)
{
    try {
        $query = $conection->prepare("insert into Clientes(nome, login, senha, admin) values (?, ?, ?, ?)");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
?>