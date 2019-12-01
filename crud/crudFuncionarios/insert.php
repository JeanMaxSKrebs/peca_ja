<?php  
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('..\..\servicos\conection.php');
require_once('functions.php');



//$pessoa = json_decode(file_get_contents("php://input"), true);
$json = file_get_contents('php://input');
$obj = json_decode($json);
$array = [];
$array = [$obj->nome, $obj->salario, $obj->tipo, $obj->endereco, $obj->cpf, $obj->login, $obj->senha];
//$array = (array) $obj;
//$array = json_decode($obj, true);
//$resultado = var_dump($array);

$resultado = insertFuncionariosPhp($conection, $array);

if($resultado)
{
	$verifica = 'true';
}
else
{
	$verifica = 'false';
}
return json_encode($verifica);

?>
