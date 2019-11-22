
<?php
require_once('./conection.php');
require_once('../crud/funcoes.php');

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
            }
        }
    }
    if($tipoUsuario){
		session_start();
		var_dump($tipoUsuario);
		$_SESSION['usuario'] = $tipoUsuario['nome'];
		$_SESSION['usuario'] = $tipoUsuario['login'];
    }

  
} else  // else correspondente ao resultado da função !empty
{
    $retorno = array('sucesso' => false, 'mensagem' => 'campos vazios');
}

print_r(json_encode($retorno));
?>