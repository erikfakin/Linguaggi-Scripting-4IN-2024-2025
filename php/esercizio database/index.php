<?php

$db = new mysqli("localhost", "root", "", "ecommerce");


$result = $db->query("SELECT * FROM products");
$prodotti = $result->fetch_all(MYSQLI_ASSOC);
// print_r($prodotti);

$prodotto1 = $prodotti[0];

echo "Nome prodotto: " . $prodotto1['name'];
echo "Prezzo: " . $prodotto1['price'];
?>
<img width=300 src="<?php echo $prodotto1['image_url'] ?>">

