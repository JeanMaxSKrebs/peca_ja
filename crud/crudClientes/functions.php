<?php
require_once('../servicos/conection.php');
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

function alterClientePhp($conection, $array)
{
    try {
        $query = $conection->prepare("update Clientes set nome=?, login=?, senha=? where login=?");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
?>