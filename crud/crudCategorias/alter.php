<?php  
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('..\..\servicos\conection.php');
require_once('functions.php');


$json = file_get_contents('php://input');
$obj = json_decode($json);
$array = [];
$array = [$obj->tipo, $obj->busca];

$resultado = alterCategoriasPhp($conection, $array);


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