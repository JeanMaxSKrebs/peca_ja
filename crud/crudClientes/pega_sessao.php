<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
require_once('conection.php');
require_once('functions.php');

session_start();
$nome = $_SESSION['nome'];
$login = $_SESSION['login'];
$senha = $_SESSION['senha'];

$array = [];
$array = [$nome, $login, $senha];

echo json_encode($array);
?>