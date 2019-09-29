<?php
    if(isset($_REQUEST['cadastro_funcionario']))
    {
        $cadastro_funcionario = $_REQUEST['cadastro_funcionario'];
    }
    if(isset($_REQUEST['cadastro_produto']))
    {
        $cadastro_produto = $_REQUEST['cadastro_produto'];
    }
    
    if (isset($cadastro_funcionario)) 
    {
        $nome = $_REQUEST['nome'];
        $cpf = $_REQUEST['cpf'];
        $login = $_REQUEST['login'];
        $senha = $_REQUEST['senha'];
    
        $array = array($nome, $cpf, $login, $senha);
    
    
        include("../servicos/conexao.php");
        $sql = "insert into funcionarios (nome, cpf, login, senha) values (?, ?, ?, ?)";
        try {
            $entrada = $pdo->prepare($sql);
            $entrada->execute($array);
            echo "<script>alert('Sucesso')</script>";
        } catch (PDOException $ex) {
            echo ($ex->getMessage());
        }
    }

    if (isset($cadastro_produto)) {
        $nome = $_REQUEST['nome'];
        $valor = $_REQUEST['valor'];
        $categoria = $_REQUEST['categoria'];
        $desconto = $_REQUEST['desconto'];
    
        $array = array($nome, $valor, $categoria, $desconto);
    
    
        include("../servicos/conexao.php");
        $sql = "insert into produtos (nome, valor, cod_categorias, desconto) values (?, ?, ?, ?)";
        try {
            $entrada = $pdo->prepare($sql);
            $entrada->execute($array);
            echo "<script>alert('Sucesso')</script>";
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
    <title>Pagina Admin</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <h1>Peça Já</h1>
    <h2>Gerenciador de Pedidos de Fast-Food Online</h2>
    <h2>Admin</h2>

    <button onclick="mostra_add_funcionario()">Add Funcionario</button>
    <br>
    
    <div id="add_func">
        <hr><br>
        <form action="" method="post">
            <input type="text" name="nome" placeholder="Nome">
            <input type="number" name="cpf" placeholder="CPF"><br><br>
            <input type="number" name="salario" placeholder="Salário"><br>
            Tipo:   Comum<input type="radio" name="tipo" checked>
                    Gerente<input type="radio" name="tipo"><br><br>
            <input type="text" name="login" placeholder="Login">
            <input type="password" name="senha"placeholder="Senha"><br><br>
            <input type="submit" name="cadastro_funcionario" value="Cadastro Funcionario">
            <hr>
        </form>
        <button onclick="fecha_add_funcionario()">Fechar</button>
    </div>
    <br><br>
    <button onclick="mostra_add_produto()">Add Produtos</button>  <br><br>
    <div id="add_prod">
        <hr><br>
        <form action="" method="post">

            <input type="text" name="nome" placeholder="Nome">
            <input type="numeric" name="valor" placeholder="Valor"><br>
            Categoria:    Almoço 1<input type="radio" name="categoria" value="1" checked>
                          Lanche 2<input type="radio" name="categoria" value="2"><br><br>
            <input type="text" name="desconto" placeholder="Desconto"> <br><br>
            <input type="submit" name="cadastro_produto" value="Cadastro Produto">
            <hr>
            
        </form>
        <button onclick="fecha_add_produto()">Fechar</button> <br><br>
    </div>
    <button onclick="mostra_add_categoria()">Add Categoria</button>
    <div id="add_categ">
        <hr><br>
        <form action="" method="post">

            
            <input type="text" name="tipo" placeholder="Categoria" checked> <br><br>
            <input type="submit" name="cadastro_produto" value="Cadastro Categoria">
            <hr>
            
        </form>
        <button onclick="fecha_add_categ()">Fechar</button> <br><br>
    </div>
    <br><br>
    <a href="index.php"><button>Início</button></a>
    <script>
        function mostra_add_funcionario() {
            
            var el = document.querySelector("#add_func");
            el.style.display = "block";

            let elprod = document.querySelector("#add_prod");
            elprod.style.display = "none";

            let elcateg = document.querySelector("#add_categ")
            elcateg.style.display = "none";
        }

        function fecha_add_funcionario() {
            var el = document.querySelector("#add_func");

            el.style.display = "none";
        }
        function mostra_add_produto() {
            
            var el = document.querySelector("#add_prod");
            el.style.display = "block";

            var elfunc = document.querySelector("#add_func");
            elfunc.style.display= "none";

            let elcateg = document.querySelector("#add_categ")
            elcateg.style.display= "none"
        }

        function fecha_add_produto() {
            var el = document.querySelector("#add_prod");

            el.style.display = "none";
        }
        function mostra_add_categoria() {
            
            let el = document.querySelector("#add_categ");
            el.style.display = "block";

            let elfunc = document.querySelector("#add_func");
            elfunc.style.display= "none";

            let elprod = document.querySelector("#add_prod");
            elprod.style.display= "none";
        }
        function fecha_add_categoria(){
            
            let el = document.querySelector("#add_categ");
            el.style.display = "none";
        }
    </script>
</body>

</html>