<?php

$id = $_POST['id_prodotto'];


$db = new mysqli("localhost", "root", "", "ecommerce");
$result = $db->query(
    "UPDATE products
SET deleted_at = NOW()
WHERE id=$id;");


header("Location: ". $_SERVER['HTTP_REFERER']);