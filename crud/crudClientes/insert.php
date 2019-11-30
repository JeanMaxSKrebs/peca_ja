<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('../servicos/conection.php');
require_once('functions.php');


$json = file_get_contents('php://input');
$obj = json_decode($json);
$admin = 'false'; 
$array = [];
$array = [$obj->nome, $obj->login, $obj->senha, $admin];
$destinatario = $obj->login;

$resultado = insertClientePhp($conection, $array);


require_once('envia_email.php');

if($resultado)
{
	$verifica = 'true';	
}
else
{
	$verifica = 'false';
}
echo json_encode($verifica);
?>