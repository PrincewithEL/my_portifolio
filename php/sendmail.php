<?php

//PHP Mailer Imports for Email Function
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require '../phpmailer/src/Exception.php';
  require '../phpmailer/src/PHPMailer.php';
  require '../phpmailer/src/SMTP.php';

// Function to clean data collected from the form

function input_cleaner($input) {
  $input = trim($input);
  $input = stripslashes($input);
  $input = htmlspecialchars($input);
  return $input;
}

if(isset($_POST['sendmessage']) && $_SERVER['REQUEST_METHOD'] === 'POST'){

    $name = input_cleaner(($_POST["name"]));
    $email = input_cleaner(($_POST["email"]));
    $subject = input_cleaner(($_POST["subject"]));
    $message = input_cleaner(($_POST["message"]));


            //Compose and Send Email
                $mail = new PHPMailer(true);

                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = 'true';
                $mail->Username = ''; 
                $mail->Password = ''; 
                $mail->SMTPSecure = 'ssl';
                $mail->Port = 465;

                $mail->setFrom($email); 
                $mail->addAddress('asher.njoroge@strathmore.edu'); 
                $mail->isHTML(true);
                $mail->Subject = 'To Asher Yisrael';
                $mail->Body = 'Dear Asher,

                Hello Asher my name is ' . $name . ', I trust that this email finds you well. I am writting to you concerning a/an <b>' . $subject '</b>.
                <br>
                ' . $message '.
                <br>
                <br>
                <p><i>I look forward to hearing from you as soon as possible</i></p>
                <br>
                <br>
                Kind Regards,
                ' . $name . '.';

                $mail->send();

                echo ("<script LANGUAGE='JavaScript'>
    window.alert('Message Succesfully Sent, I will get back to you soon! Have a good day/night ahead :)');
    window.location.href='../index.html?sendmail=successful';
    </script>");

            }else{
                echo ("<script LANGUAGE='JavaScript'>
    window.alert('Message Unsuccesful :( Kindly try again...');
    window.location.href='../contacts.html?sendmail=unsuccessful';
    </script>");
            }
           
?>
