<?php
require_once('conection.php');

function pedido($conection, $array){
    
    try {
        $query = $conection->prepare("insert into pedidos(cod_clientes, valor_total, ) values (?, ?)");
        $result = $query->execute($array);
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}


function insertPedidoProduto($pedido, $returnid = false){

    $commands = [
        'INSERT INTO pedidos(valor_total) VALUES (?,?,?,?,?)',
            'SELECT pg_sequence_last_value(\'pedido_cod_seq\') as lastCodPedidos LIMIT 1'
    ];

    $params = [ 
                [
                    $pedido['cod_cliente'],
                    // $produto['cod_func'],
                    // $produto['data_pedido'],
                    $pedido['valor_total']
                ],
                []
            ];
}

    foreach ($pedido['codigo'] as $codigo) {
        $sql = 'INSERT INTO prod_desc (id_prod,id_desc) SELECT pg_sequence_last_value(\'pedido_cod_seq\') as lastCodPedido , ? FROM pedidos LIMIT 1';
            array_push($commands,$sql);
            array_push($params,[$codigo]);
    }
    if($returnid)
        $returnid='pedido_cod_seq';

    $result = pedidoProduto($commands,$params,$returnid);
    if($result){
        return $result;
    }else{
        return false;
}

function pedidoProduto(array $commands, array $multi_parameters, $sequence = NULL){
    
    $connection = null;
    //debug([$commands,$multi_parameters]);
    if(count($commands)!==count($multi_parameters)) {
        throw new Exception("Queries and Parameters does'nt match!");
    }elseif (isAssoc($commands)||isAssoc($multi_parameters)){
        throw new Exception("Queries and Parameters must be numeric arrays!");
    }
    try {
        $connection  = connect();
        $connection->beginTransaction();
        foreach ($commands as $index=>$sql) {
            if($multi_parameters[$index]) {
                $preparedStatment = $connection->prepare($sql, $multi_parameters);
                bindValuesParameters($preparedStatment, $multi_parameters[$index]);
            }else{
                $preparedStatment = $connection->prepare($sql);
            }
            $preparedStatment->execute();
            $error = $preparedStatment->errorInfo();
            if ($error[2]||$error[0]!=='00000') {
                throw new PDOException($preparedStatment->errorCode());
            }
        }
        if (isset($sequence)) {
            $ID = $connection->lastInsertId($sequence);
            if($ID){
                $connection->commit();
                return $ID;
            }else{
                $connection->commit();
                return -1;
            }
        } else {
            $connection->commit();
            return $preparedStatment->rowCount();
        }
    } catch (PDOException $exc) {
        if ((isset($connection)) && ($connection->inTransaction())) {
            $connection->rollBack();
        }
        debugStatment($preparedStatment,$exc);
        return false;
    } finally {
        if (isset($connection)) {
            unset($connection);
        }
    }
    
}
// public PDO::lastInsertId ([ string $name = NULL ] ) : string


?>