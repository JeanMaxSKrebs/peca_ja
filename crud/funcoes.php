<?php
require_once('../servicos/conection.php');

function validaSessaoPhp($conection, $array){
    try{
        $query = $conection->prepare("select * from clientes where login=? and senha=?");
        $query->execute($array);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function validaSessaoFuncionarioPhp($conection, $array){
    try{
        $query = $conection->prepare("select * from funcionarios where login=? and senha=?");
        $query->execute($array);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}