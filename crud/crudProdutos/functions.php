<?php
require_once('conection.php');
function insertProdutosPhp($conection, $array)
{
    try {
        $query = $conection->prepare("insert into produtos(nome, valor, desconto, cod_categorias, imagem) values (?, ?, ?, ?, ?)");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function alterProdutosPhp($conection, $array)
{
    try {
        $query = $conection->prepare("update produtos set nome=?, valor=?, desconto=?, cod_categorias=?, imagem=? where nome=?");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaProdutosPhp($conection)
{
    try {
        $query = $conection->prepare("select codigo, cod_categorias, nome, valor, desconto  from produtos ORDER BY codigo");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function buscaProdutos_nomePhp($conection, $array)
{
    try {
        $query = $conection->prepare("select * from produtos where nome=? ORDER BY codigo");
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
        $query = $conection->prepare("select * from produtos where nome=? ORDER BY codigo");
        $query->execute($array);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
function deleteProdutosPhp($conection, $array){
    try{
        $query = $conection->prepare("delete from produtos where nome=?");
        $result = $query->execute($array);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }

}
// site_cliente
function produtoClientePhp($conection)
{
    try {
        $query = $conection->prepare("select nome, valor, imagem from produtos ORDER BY codigo");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}