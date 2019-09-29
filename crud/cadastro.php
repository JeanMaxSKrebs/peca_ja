<?php
if(isset($_REQUEST['cadastro']))
{
    $cadastro = $_REQUEST['cadastro'];
}

if (isset($cadastro)) {
    $nome = $_REQUEST['nome'];
    $cpf = $_REQUEST['cpf'];
    $login = $_REQUEST['login'];
    $senha = $_REQUEST['senha'];

    $array = array($nome, $cpf, $login, $senha);


    include("../servicos/conexao.php");
    $sql = "insert into clientes (nome, cpf, login, senha) values (?, ?, ?, ?)";
    try {
        $entrada = $pdo->prepare($sql);
        $entrada->execute($array);
        header("location: ../estrutura/site_cliente.php");
    } catch (PDOException $ex) {
        echo ($ex->getMessage());
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cadastro</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <div class="cadastro">
        <h1>Cadastro</h1>
        <br>
        <form action="cadastro.php" method="post">
            Nome:<input type="text" name="nome">
            CPF:<input type="number" name="cpf"><br><br>
            Login:<input type="text" name="login">
            Senha:<input type="password" name="senha"><br><br>
            <input type="submit" name="cadastro" value="Cadastrar">
        </form>
    </div>
</body>

</html>