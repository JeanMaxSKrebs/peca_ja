<?php  
header('Access-Control-Allow-Origin: *');

require_once('conexao.php');
require_once('functions.php');


$resultado = mostraPedido($conection);

if($resultado) {
    echo json_encode($resultado);
} else {
	echo("Não existem pedidos no banco");
}


?>