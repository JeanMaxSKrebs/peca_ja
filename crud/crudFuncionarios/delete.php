<?php  
header('Access-Control-Allow-Origin: *');

require_once('../servicos/conection.php');
require_once('functions.php');

$busca = $_REQUEST['busca'];
$array = [];
$array = [$busca];
$resultado = deleteFuncionariosPhp($conection, $array);
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