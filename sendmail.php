<?php
// Enable error reporting for debugging (shouldn't be used in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Redirect to thanks.html
    header('Location: thanks.html');
    exit();
}

?>
