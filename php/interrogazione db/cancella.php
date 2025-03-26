<?php

$id = $_POST['pagamento_id'];


$db = new mysqli("localhost", "root", "", "ecommerce");
$result = $db->query("DELETE FROM payments WHERE id=$id");
