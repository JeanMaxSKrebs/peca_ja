<?php

	function valida_sessao(){
		session_start(); 

		if(isset($_SESSION["nome"])==true)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

?>