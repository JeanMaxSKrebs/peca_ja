<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('..\..\servicos\conection.php');
require_once('functions.php');
// require_once('valida_sessao.php')

        $array = json_decode(file_get_contents("php://input"));

        $pedido = [];
        $valor_tot = 0;
        
        foreach ($array as &$value) {
            
            $valor = $value->valor;
            $valor_tot = $valor_tot + $valor;
            $codigo = $value->codigo;
            $produto = [];
            $produto['codigo'] = $codigo;
            $pedido['produtos'][] =  $produto;
        }
        $pedido['cod_clientes'] = 1;
        $pedido['valor_total'] = $valor_tot;
        
        $resultado = insertPedidoProduto($pedido, true);
        
        if($resultado)
        {
            $verifica = 'true';
        }
        else
        {
            $verifica = 'false';
        }
        echo json_encode($verifica);
    

?>