<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $theme = trim($_POST["theme"]);
    $message = trim($_POST["message"]);

    // Specify the email to which the form data should be sent
    $to = "your_email@example.com";
    $subject = "New message from your website: $theme";
    
    // Construct the email body
    $email_body = "You have received a new message from the user $email.\n\n".
                  "Here is the message:\n$message";

    // Headers
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $email_body, $headers);
    
    // Redirect to a new page or show a success message (optional)
    header("Location: thank_you.html");
    exit;
}
?>
