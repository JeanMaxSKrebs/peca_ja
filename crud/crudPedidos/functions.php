<?php
require_once('..\..\servicos\conection.php');

setlocale(LC_ALL, 'pt_BR','pt_BR.utf-8','pt_BR.utf-8','portuguese');
date_default_timezone_set('America/Sao_Paulo');
function connect(){
    try{
        $conection = new PDO("pgsql:host=localhost;dbname=site;user=postgres;password=1234");
        $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conection;
    }
    catch(PDOException $ex){
        echo("Deu erro! <br>". $ex->getMessage());
        return false;
    }
}
function isAssoc(array $arr){
    if (array() === $arr) return false;
    return array_keys($arr) !== range(0, count($arr) - 1);
}

function insertPedidoProduto($pedido, $returnid = false){
    // print_r($pedido);

    $commands = [
        'INSERT INTO pedidos(cod_clientes, valor_total) VALUES (?,?)',
            'SELECT pg_sequence_last_value(\'pedidos_codigo_seq\') as lastCodPedidos LIMIT 1'
    ];

    $params = [ 
                [
                    $pedido['cod_clientes'],
                    // $produto['cod_func'],
                    // $produto['data_pedido'],
                    $pedido['valor_total']
                ],
                []
            ];

        foreach ($pedido['produtos'] as $produto) {
            $sql = 'INSERT INTO pedido_produto(cod_pedidos, cod_produto) SELECT pg_sequence_last_value(\'pedidos_codigo_seq\') as lastCodPedidos, ? FROM pedidos LIMIT 1';
                array_push($commands,$sql);
                array_push($params,[$produto['codigo']]);
        }

        // var_dump($commands);
        // var_dump($params);

        if($returnid)
        {
            $returnid='pedidos_codigo_seq';
        }

        $result = pedidoProduto($commands,$params,$returnid);

        if($result){
            return $result;
        }else{
            return false;
        }
}

function pedidoProduto(array $commands, array $multi_parameters, $sequence = NULL){

    $connection = null;

    if(count($commands)!==count($multi_parameters)) {
        throw new Exception("Queries and Parameters does'nt match!");
    }elseif (isAssoc($commands)||isAssoc($multi_parameters)){
        throw new Exception("Queries and Parameters must be numeric arrays!");
    }
    try {
        $connection  = connect();
        $connection->beginTransaction();
        foreach ($commands as $key =>$sql) {
            
            $query = $connection->prepare($sql);
            $result = $query->execute($multi_parameters[$key]);
            // $error = $result->errorInfo();

            // if ($error[2]||$error[0]!=='00000') {
            //     throw new PDOException($result->errorCode());
            // }
        }
        
        if (isset($sequence)) {
            print_r($commands);
            $ID = $connection->lastInsertId($sequence);
            var_dump($ID);
            print_r($ID);
            if($ID){
                $connection->commit();
                return $ID;
            }else{
                $connection->commit();
                return -1;
            }
        } else {
            $connection->commit();
            return $result->rowCount();
        }
    } catch (PDOException $ex) {
        if ((isset($connection)) && ($connection->inTransaction())) {
            $connection->rollBack();
        }
        echo("Deu erro! <br>". $ex->getMessage());

        var_dump($commands);
        return false;
    } finally {
        if (isset($connection)) {
            unset($connection);
        }
    }
    
}

function mostraPedido($conection){
    try {
        $query = $conection->prepare("select cod_pedidos, count(*) as produtos from pedido_produto 
        group by cod_pedidos;");

        // select cod_pedidos, count(*) from pedido_produto group by cod_pedidos


        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

function buscaProduto($conection, $array){
    try {
        $query = $conection->prepare("select produtos.nome, pp.cod_produto from produtos inner join pedido_produto pp
        on(produtos.codigo=pp.cod_produto) inner join pedidos on(pp.cod_pedidos=pedidos.codigo)
        where cod_pedidos = ?");

        $query->execute($array);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
// public PDO::lastInsertId ([ string $name = NULL ] ) : string

function insereFuncionarioPedido($conection, $array){

    try {
        $query = $conection->prepare("update pedidos set cod_func = ?, status = 'Em Andamento' where codigo = ? order by codigo");
        
        $query->execute($array);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        
        return $result;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
?>