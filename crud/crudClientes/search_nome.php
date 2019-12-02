<?php  
header('Access-Control-Allow-Origin: *');

require_once('..\..\servicos\conection.php');
require_once('functions.php');

$nome_cliente = $_REQUEST['busca'];
$array = [];
$array = [$nome_cliente];
$resposta = buscaCliente_nomePhp($conection, $array);
if($resposta) {
	echo json_encode($resposta);
} else {
	echo("Não existem produtos com esse nome no banco");
}


?>