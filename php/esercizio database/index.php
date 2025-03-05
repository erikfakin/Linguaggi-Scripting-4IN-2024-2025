<?php

$db = new mysqli("localhost", "root", "", "ecommerce");


$result = $db->query("SELECT * FROM products");
$prodotti = $result->fetch_all(MYSQLI_ASSOC);
// print_r($prodotti);

foreach($prodotti as $prodotto){
    ?>
    <div>
        <img width=300 src="<?php echo $prodotto['image_url'] ?>">
        <h2><?php echo $prodotto['name'] ?></h2>
        <p><?php echo $prodotto['description'] ?></p>
        <p><?php echo $prodotto['price'] ?> €</p>
        <input type="number" value="1" name="quantita">
        <button>Add to cart</button>
        <form action="cancella-prodotto.php" method="POST">
            <input name="id_prodotto" type="hidden" value="<?php echo $prodotto['id'] ?>"/>
            <button>Cancella</button>
        </form>
      
    </div>
    <?php
}



