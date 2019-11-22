<?php  
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('conection.php');
require_once('functions.php');


$json = file_get_contents('php://input');
$obj = json_decode($json);
$array = [];
$array = [$obj->nome, $obj->cpf, $obj->login, $obj->senha];

$resultado = insertClientePhp($conection, $array);

if($resultado) {
	echo "Sucesso ao inserir no banco de dados";
} else {
	echo "Falha ao inserir no banco de dados";
}

?>