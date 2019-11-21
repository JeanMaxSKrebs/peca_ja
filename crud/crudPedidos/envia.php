<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('conection.php');
require_once('functions.php');
    

    $array=json_decode($_POST['dados']);

    // $json = file_get_contents('php://input');
    $pedido = [];
    $valor_tot = 0;

    foreach ($array as &$value) {
        // print_r($value);
        // echo("valor:".$valor = $value->valor);
        $valor = $value->valor;
        $valor_tot = $valor_tot + $valor;
        $codigo = $value->codigo;
        $produto = [];
        $produto['codigo'] = $codigo;
        $produto['valor'] = $valor;
        $pedido['produtos'][] =  $produto;
    }
    $pedido['cod_clientes'] = 1;
    $pedido['valor_total'] = $valor_tot;

    // print_r($pedido);
    $resultado = insertPedidoProduto($pedido, true);

    // $arrayKey = $_POST["dados"];
    // print_r($arrayKey);
   
    // $arrayKey = json_decode(stripslashes($_POST['key']));
    // var_dump($arrayKey);
    
    // $resultado = pedido($conection, $array);

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