<?php
    setlocale(LC_ALL, 'pt_BR','pt_BR.utf-8','pt_BR.utf-8','portuguese');
    date_default_timezone_set('America/Sao_Paulo');
    try{
        $conection = new PDO("pgsql:host=localhost;dbname=site;user=postgres;password=senha5");
        $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    catch(PDOException $ex){
        echo("Deu erro! <br>". $ex->getMessage());
    }
?>
