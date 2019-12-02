<?php  
header('Access-Control-Allow-Origin: *');

require_once('..\..\servicos\conection.php');
require_once('functions.php');

$nome_produto = $_REQUEST['busca'];
$array = [];
$array = [$nome_produto];
$resultado = deleteCategoriasPhp($conection, $array);
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