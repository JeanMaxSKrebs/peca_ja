<?php  
header('Access-Control-Allow-Origin: *');

require_once('conexao.php');
require_once('functions.php');

    session_start();
    $funcionario = $_SESSION['codigo'];
    $pedido = $_POST['codigo'];
    $array = [];
    $array = [$funcionario, $pedido];

    $resultado = insereFuncionarioPedido($conection, $array);

    echo json_encode($resultado);
?>