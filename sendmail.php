<?php
// Check if the server request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Email address where you want to receive messages
    $to = 'safedeal.help@proton.me';
    
    // Subject of the email
    $subject = 'New message from website';
    
    // Collect and sanitize form data
    $name = isset($_POST['name']) ? filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING) : '';
    $email = isset($_POST['email']) ? filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) : '';
    $message = isset($_POST['message']) ? filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING) : '';
    
    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/".phpversion();
    
    // Message body
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";
    
    // Sending the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect to a thank you page, or issue a success message
        header('Location: thanks.html');
        exit;
    } else {
        // Handle the error accordingly
        echo "There was a problem sending the email. Please try again.";
    }
    
    // Prevent PHP script from executing after a POST request has been redirected
    exit;
}
?>
