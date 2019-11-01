<?php
    if(isset($_REQUEST['cadastro_funcionario']))
    {
        $cadastro_funcionario = $_REQUEST['cadastro_funcionario'];
    }
    if(isset($_REQUEST['cadastro_produto']))
    {
        $cadastro_produto = $_REQUEST['cadastro_produto'];
    }
    if(isset($_REQUEST['cadastro_categoria']))
    {
        $cadastro_categoria = $_REQUEST['cadastro_categoria'];
    }
    




    if (isset($cadastro_funcionario)) 
    {
        $nome = $_REQUEST['nome'];
        $cpf = $_REQUEST['cpf'];
        $login = $_REQUEST['login'];
        $senha = $_REQUEST['senha'];
    
        $array = array($nome, $cpf, $login, $senha);
    
    
        include("../servicos/conexao.php");
        $sql = "insert into funcionarios (nome, cpf, login, senha) values (?, ?, ?, ?)";
        try {
            $entrada = $pdo->prepare($sql);
            $entrada->execute($array);
            echo "<script>alert('Sucesso')</script>";
        } catch (PDOException $ex) {
            echo ($ex->getMessage());
        }
    }

    if (isset($cadastro_produto)) {
        $nome = $_REQUEST['nome'];
        $valor = $_REQUEST['valor'];
        $categoria = $_REQUEST['categoria'];
        $desconto = $_REQUEST['desconto'];
    
        $array = array($nome, $valor, $categoria, $desconto);
    
    
        include("../servicos/conexao.php");
        $sql = "insert into produtos (nome, valor, cod_categorias, desconto) values (?, ?, ?, ?)";
        try {
            $entrada = $pdo->prepare($sql);
            $entrada->execute($array);
            echo "<script>alert('Sucesso')</script>";
        } catch (PDOException $ex) {
            echo ($ex->getMessage());
        }
    }
    
    if (isset($cadastro_categoria)) {
        $tipo = $_REQUEST['tipo'];
    
        $array = array($tipo);
    
        include("../servicos/conexao.php");
        $sql = "insert into categorias (tipo) values (?)";
        try {
            $entrada = $pdo->prepare($sql);
            $entrada->execute($array);
            echo "<script>alert('Sucesso')</script>";
        } catch (PDOException $ex) {
            echo ($ex->getMessage());
        }
    }
?>