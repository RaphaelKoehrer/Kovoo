<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email   = htmlspecialchars(trim($_POST["email"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    if ($name && $email && $message) {
        $to      = "support@kovoo.at";
        $subject = "Kontaktformular Nachricht von $name";
        $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
        $body    = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

        if (mail($to, $subject, $body, $headers)) {
            echo "<script>window.location.href='../unterseiten/kontakt.html?success=1';</script>";
            exit;
        } else {
            echo "<script>window.location.href='../unterseiten/kontakt.html?error=1';</script>";
            exit;
        }
    } else {
        echo "<script>window.location.href='../unterseiten/kontakt.html?error=1';</script>";
        exit;
    }
}
?>
