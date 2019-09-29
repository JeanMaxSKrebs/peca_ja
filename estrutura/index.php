<?php

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Peça Já</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body class="login">
    <h1>Peça Já</h1>
    <h2>Gerenciador de Pedidos de Fast-Food Online</h2>
    <br><br><br>
    <div class="login">
        <br>
        <h1>Login</h1>
        <form action="../servicos/redireciona.php" method="post">
            <input type="text" name="usuario" placeholder='usuario'maxlength="32" style="width:250px; height:25px"><br><br><br>
            <input type="password" name="senha" placeholder='senha' maxlength="24" style="width:250px; height:25px"><br><br><br>
            <input type="submit" name="login" value="Login">
            <br>
            <br>
            <input type="submit" name="cadastro" value="Cadastro">
        </form>
    </div>
</body>

</html>