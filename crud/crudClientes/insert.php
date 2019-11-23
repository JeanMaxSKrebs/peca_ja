<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('conection.php');
require_once('functions.php');


$json = file_get_contents('php://input');
$obj = json_decode($json);
$admin = 'false'; 
$array = [];
$array = [$obj->nome, $obj->cpf, $obj->login, $obj->senha, $admin];
$destinatario = $obj->login;

$resultado = insertClientePhp($conection, $array);


require_once('envia_email.php');

if($resultado)
{
	$verifica = 'true';
	$admin = false; 
	session_start();
	$_SESSION['nome'] = $obj->nome;
	$_SESSION['login'] = $obj->login;
	$_SESSION['admin'] = $admin;
	var_dump($_SESSION);
	print_r($_SESSION);die;
}
else
{
	$verifica = 'false';
}
return json_encode($verifica);
?>