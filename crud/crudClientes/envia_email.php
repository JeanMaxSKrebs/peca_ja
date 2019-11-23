<?php
//identificação para a chamada da classe
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;	

// Inclui os arquivos PHPMailer.php e Exception.php e SMTP.php localizados na pasta PHPMailer/src
require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/Exception.php";
require "PHPMailer/src/SMTP.php";

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
    $mail->AddAddress($destinatario); 
	
// Endereço para resposta
	
	$mail->addReplyTo("danilosb4@gmail.com");

// Assunto e Corpo do email

    $mail->Subject = "Sobre Nós";

    $mail->Body = "<br> <h1>Peça Já</h1><h2>Gerenciador de Pedidos de Fast-Food Online</h2>
    <h1>Cadastro</h1> <br> <p> Nós somos um empresa de entrega de pedidos automático,
    para que você não precise se preocupar em ter que fazer um pedido
    com um garçom e ser mais rapido e mais barato para o restaurante,
    resultando em menos espera para você e melhor administração para o restaurante.
    <br> Agradecemos por seu cadastro, aproveite!" . $destinatario . " Enviado por: "."danilosb4@gmail.com" ;

// Enviando o email

    if($mail->Send())

    {
        $message = "E-mail SMTP enviado com sucesso para " . $destinatario . " Enviado por: "."danilosb4@gmail.com" ;
        
    } else {
        
        $message = "PhpMailer Gmail status: " . $mail->ErrorInfo;

    }
echo $message;

?>