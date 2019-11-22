<?php  
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('conection.php');
require_once('functions.php');



//$pessoa = json_decode(file_get_contents("php://input"), true);
$json = file_get_contents('php://input');
$obj = json_decode($json);
$array = [];
$array = [$obj->nome, $obj->cpf, $obj->login, $obj->senha];
//$array = (array) $obj;
//$array = json_decode($obj, true);
//$resultado = var_dump($array);

$resultado = insertClientePhp($conection, $array);
//echo $obj->quant;

if($resultado) {
	echo "Sucesso ao inserir no banco de dados";
} else {
	echo "Falha ao inserir no banco de dados";
}

?>