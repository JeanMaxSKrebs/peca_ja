<?php
require_once('../servicos/conection.php');
require_once('../crud/funcoes.php');

$usuario = $_REQUEST['usuario'];
$senha = $_REQUEST['senha'];

if (!(empty($usuario) or empty($senha))) // testa se os campos do formulário não estão vazios 
{   
    
    $array = [$usuario, $senha];
    validaSessaoAdminPhp($conection, $array);
    
    $retorno = array('sucesso' => true, 'mensagem' => 'usuário logado','usuario' => 'admin');
    
  
} else  // else correspondente ao resultado da função !empty
{
    $retorno = array('sucesso' => false, 'mensagem' => 'campos vazios');
}

echo json_encode($retorno);
?>