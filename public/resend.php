 <?php
    $errors = '';
    $MY_EMAIL = 'sebastiantodev@gmail.com';
    $REGEX_EMAIL = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i"

    if(empty($_POST['name'])  || empty($_POST['email']) || empty($_POST['message'])) {
        $errors .= "\n Error: all fields are required";
    }

    $name = $_POST['username'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    if (!preg_match($REGEX_EMAIL, $email_address)) {
        $errors .= "\n Error: Invalid email address";
    }
    
    if(empty($errors)) {
        $to = $MY_EMAIL;
        $email_subject = "Contact form submission: $name";

        $email_body = "You have received a new message. ".
        " Here are the details:\n Name: $name \n ".
        "Email: $email_address\n Message \n $message";

        $headers = "From: $MY_EMAIL\n";
        $headers .= "Reply-To: $email_address";

        mail($to,$email_subject,$email_body,$headers);
        
        header('Location: /');
    }
