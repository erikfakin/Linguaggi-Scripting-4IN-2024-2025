<?php

$nome = $_POST['nome'];
$descrizione = $_POST['descrizione'];
$prezzo = $_POST['prezzo'];
$stock = $_POST['stock'];

$db = new mysqli("localhost", "root", "", "ecommerce");
$result = $db->query(
    "INSERT INTO products(name, description, price, stock) 
    VALUES ('$nome', '$descrizione', $prezzo, $stock)");

header("Location: ". $_SERVER['HTTP_REFERER']);