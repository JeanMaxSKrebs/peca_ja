<?php
if(isset($_REQUEST['cadastro']))
{
    $cadastro = $_REQUEST['cadastro'];
}

if (isset($cadastro)) {
    $nome = $_REQUEST['nome'];
    $cpf = $_REQUEST['cpf'];
    $login = $_REQUEST['login'];
    $senha = $_REQUEST['senha'];

    $array = array($nome, $cpf, $login, $senha);


    include("../servicos/conexao.php");
    $sql = "insert into clientes (nome, cpf, login, senha) values (?, ?, ?, ?)";
    try {
        $entrada = $pdo->prepare($sql);
        $entrada->execute($array);
        header("location: ../estrutura/site_cliente.php");
    } catch (PDOException $ex) {
        echo ($ex->getMessage());
    }
}
?>
