<?php
require_once('conection.php');
function insertFuncionariosPhp($conection, $array)
{
    try {
        $query = $conection->prepare("insert into funcionarios(nome, salario, tipo, endereco, cpf, login, senha) values (?, ?, ?, ?, ?, ?, ?)");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function alterFuncionariosPhp($conection, $array)
{
    try {
        $query = $conection->prepare("update funcionarios set nome=?, salario=?, tipo=?, endereco=?, cpf=?, login=?, senha=? where nome=?");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaFuncionariosPhp($conection)
{
    try {
        $query = $conection->prepare("select * from funcionarios ORDER BY codigo");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaFuncionarios_nomePhp($conection, $array)
{
    try {
        $query = $conection->prepare("select * from funcionarios where nome=? ORDER BY codigo");
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
        $query = $conection->prepare("select * from funcionarios where nome=? ORDER BY codigo");
        $query->execute($array);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function deletePhp($conection, $array){
    try{
        $query = $conection->prepare("delete from funcionarios where nome=?");
        $result = $query->execute($array);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }

}