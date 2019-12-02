<?php

//identificação para a chamada da classe

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;	

if (isset($_POST['enviar'])) 
{
	

// Inclui os arquivos PHPMailer.php e Exception.php e SMTP.php localizados na pasta PHPMailer/src

require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/Exception.php";
require "PHPMailer/src/SMTP.php";

 

// resgatando os dados passados pelo form

$nome = $_POST['nome'];

$email = $_POST['email'];

$mensagem = $_POST['mensagem'];

$email_resposta = $_POST['email_resposta'];

// instanciando a classe
    $mail = new PHPMailer();  
	
//  opçao de idioma, setado como br	
    $mail->SetLanguage("br"); 

// habilitando SMTP	
    $mail->IsSMTP(); 

// enviando como HTML
    $mail->IsHTML(true); 
	
// Pode ser: 0 = não exibe erros, 1 = exibe erros e mensagens, 2 = apenas mensagens	
    $mail->SMTPDebug = 0;  
	
// habilitando autenticação	
    $mail->SMTPAuth = true;  
	
// habilitando tranferêcia segura (obrigatório)	
    $mail->SMTPSecure = 'tls'; 


// Configurações para utilização do SMTP do Gmail  

    $mail->Host = 'smtp.gmail.com';

    $mail->Port = 587; // Porta de envio de e-mails do Gmail

    $mail->Username = 'dawexemplo2014@gmail.com';

    $mail->Password = 'senha52014';

    $mail->CharSet = "utf-8";

// Remetente da mensagem

    $mail->SetFrom('dawexemplo2014@gmail.com');
	
// Endereço de destino do email
    $mail->AddAddress($email); 
	
// Endereço para resposta
	
	$mail->addReplyTo($email_resposta);

// Assunto e Corpo do email

    $mail->Subject = "Teste de SMTP";

    $mail->Body = $mensagem . "<br> E-mail SMTP enviado com sucesso para " . $email . " Enviado por: ".$email_resposta ;

// Enviando o email

    if(!$mail->Send())

    {

        $message = "PhpMailer Gmail status: " . $mail->ErrorInfo;

    } else {

        $message = "E-mail SMTP enviado com sucesso para " . $email . " Enviado por: ".$email_resposta ;


 }
 echo $message;

}
?>

 <head>

 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

 <title>Envio de email pela classe PHPMailer</title>


 </head>

 <body>

<form action="formulario_email.php" method="post" name="frm_contato">

Informe o nome do destinatário: 

<input type="text" name="nome"> <br />

 

Informe o E-mail do destinatário: 

<input type="text" name="email"> <br />


Informe o E-mail para resposta: 

<input type="text" name="email_resposta"> <br />


Escreva uma Mensagem: 

<textarea name="mensagem" rows="5" cols="50"></textarea> <br />



<input type="submit" name="enviar" value="ENVIAR" />

</form>


