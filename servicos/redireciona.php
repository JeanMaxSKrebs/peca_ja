<?php
if (isset($_REQUEST['login']))
{
    $login = $_REQUEST['login'];
}
if (isset($_REQUEST['cadastro']))
{
    $cadastro = $_REQUEST['cadastro'];
}

if (isset($login))
{
    $usuario = $_REQUEST['usuario'];
    $senha = $_REQUEST['senha'];
    include("conexao.php");

    $sql = "select codigo, nome, login, senha from clientes;";
    try
    {

        $entrada = $pdo->prepare($sql);
        $entrada->execute();
        while ($registro = $entrada->fetch(PDO::FETCH_ASSOC))
        {
            $codigo = $registro['codigo'];
            $usuario_banco = $registro['login'];
            $senha_banco = $registro['senha'];
            if($usuario_banco==$usuario)
            {
                header("location: ../estrutura/site_cliente.php");
                if($usuario_banco=='admin')
                {
                    header("location: ../estrutura/site_admin.php");
                }
            }
        }
    }
    catch(PDOException $ex)
    {
        echo($ex->getMessage());
    }

    $sql = "select codigo, nome, login, senha from funcionarios;";
    try
    {

        $entrada = $pdo->prepare($sql);
        $entrada->execute();
        while ($registro = $entrada->fetch(PDO::FETCH_ASSOC))
        {
            $codigo = $registro['codigo'];
            $usuario_banco = $registro['login'];
            $senha_banco = $registro['senha'];
            if($usuario_banco==$usuario)
            {
                header("location: ../estrutura/site_funcionario.php");
            }
        }
    }
    catch(PDOException $ex)
    {
        echo($ex->getMessage());
    }
 
}
if (isset($cadastro)) {
    header('location: ../crud/cadastro.php');
}