<?php

$id = $_POST['id_prodotto'];

$db = new mysqli("localhost", "root", "", "ecommerce");
$result = $db->query(
    "DELETE FROM products WHERE id=$id;");


header("Location: ". $_SERVER['HTTP_REFERER']);