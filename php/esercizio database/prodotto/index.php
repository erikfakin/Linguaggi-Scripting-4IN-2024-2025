<?php
$id = $_GET['id'];

$db = new mysqli("localhost", "root", "", "ecommerce");
$result = $db->query("SELECT * FROM products WHERE id=$id");
$prodotti = $result->fetch_all(MYSQLI_ASSOC);
$prodotto = $prodotti[0];
?>
<div>
    <img width=300 src="<?php echo $prodotto['image_url'] ?>">
    <h2><?php echo $prodotto['name'] ?></h2>
    <p><?php echo $prodotto['description'] ?></p>
    <p><?php echo $prodotto['price'] ?> €</p>
    <input type="number" value="1" name="quantita">
    <button>Add to cart</button>
</div>
