<?php
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
?>