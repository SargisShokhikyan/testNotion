<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    // echo "Имя: " . $name . "<br>";
    // echo "Email: " . $email . "<br>";

// } else {
//     echo "Данные формы не получены.";
// }
?>