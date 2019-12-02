<?php
require_once('./conection.php');
require_once('../crud/funcoes.php');
session_start();

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

if (!(empty($usuario) or empty($senha))) // testa se os campos do formulário não estão vazios 
{   
    $array = [$usuario, $senha];
	$tipoUsuario = validaSessaoPhp($conection, $array);

    if($tipoUsuario['admin']){
        $retorno = array('sucesso' => true, 'mensagem' => 'usuário logado','usuario' => "admin");
    }
    else{
        if($tipoUsuario)
        {
            $retorno = array('sucesso' => true, 'mensagem' => 'usuário logado','usuario' => "cliente");
        }
        else
        {
            $tipoUsuario = validaSessaoFuncionarioPhp($conection, $array);
            if($tipoUsuario)
            {
                $retorno = array('sucesso' => true, 'mensagem' => 'usuário logado','usuario' => "funcionario");
                $_SESSION['funcionario'] = true;
            }
        }
    }
    if($tipoUsuario){
		$_SESSION['codigo'] = $tipoUsuario['codigo'];
		$_SESSION['nome'] = $tipoUsuario['nome'];
		$_SESSION['login'] = $tipoUsuario['login'];
        $_SESSION['admin'] = $tipoUsuario['admin'];
    }
    if($tipoUsuario==null)
    {
        $retorno = array('sucesso' => false, 'null'=> false, 'mensagem' => 'inexistente no banco');
    }

  
} else {
    $retorno = array('sucesso' => false, 'null'=> false, 'mensagem' => 'campos vazios');
}
echo json_encode($retorno);
?>