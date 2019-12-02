<?php  
header('Access-Control-Allow-Origin: *');

require_once('..\..\servicos\conection.php');
require_once('functions.php');

    $pedido = $_POST['codigo'];
    $array = [];
    $array = [$pedido];
    $resultado = buscaProduto($conection, $array);

    echo json_encode($resultado);

?>