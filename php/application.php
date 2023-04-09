<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

if($_POST['name'] == '') {
    $verifiedName = 'noName';
} else {
    $verifiedName = $_POST['name'];
}

$name = $verifiedName;
$phone = $_POST['phone'];
$communicationMethod = $_POST['communicationMethod'];


$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'lets.do.design@yandex.ru';
$mail->Password = 'htjsyuzppbsntkta';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('lets.do.design@yandex.ru');
$mail->addAddress('lets.do.design@yandex.ru');
$mail->isHTML(true);

$mail->Subject = 'Заявка на сайт';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Способ связи: ' .$communicationMethod;
$mail->AltBody = '';

// TELEGRAM

$name = $verifiedName;
$phone = $_POST['phone'];
$communicationMethod = $_POST['communicationMethod'];
$token = "1921376595:AAHb396MUM4VD6et8KkWKd3_t7G1jJQFyZs";
$chat_id = "-792933411";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Способ связи:' => $communicationMethod
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>
