<?php  
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('..\..\servicos\conection.php');
require_once('functions.php');
session_start();


$json = file_get_contents('php://input');
$obj = json_decode($json);
$array = [];
$array = [$obj->nome, $obj->login, $obj->senha, $_SESSION['login']];

$resultado = alterClientePhp($conection, $array);
print_r($array);
print_r($resultado);
print_r($obj);
if($resultado)
{
    $verifica = 'true';
    $_SESSION['nome'] = $obj->nome;
    $_SESSION['login'] = $obj->login;
}
else
{
	$verifica = 'false';
}
echo json_encode($verifica);

?>