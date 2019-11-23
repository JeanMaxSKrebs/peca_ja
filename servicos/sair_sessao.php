<?php
session_start(); 

		if(isset($_SESSION["nome"])==true)
		{
            session_destroy();

			$retorno = array('sucesso'=>true,'mensagem'=>'usuário deslogado');
        }

echo json_encode($retorno);
?>