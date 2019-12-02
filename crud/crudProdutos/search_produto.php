<?php  
header('Access-Control-Allow-Origin: *');

require_once('..\..\servicos\conection.php');
require_once('functions.php');

$resultado = produtoClientePhp($conection);

if($resultado) {
    echo json_encode($resultado);
} else {
	echo("Não existem produtos no banco");
}


?>