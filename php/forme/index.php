<?php
    print_r($_GET);
    
    // Creazione di un array associativo con le auto e i loro colori
    $auto = [
        "Fiat 500" => "Rosso",
        "BMW X5" => "Nero",
        "Audi A4" => "Bianco",
        "Mercedes-Benz C-Class" => "Grigio",
        "Volkswagen Golf" => "Blu",
        "Toyota Corolla" => "Argento",
        "Ford Mustang" => "Giallo",
        "Honda Civic" => "Verde",
    ];

    $cerco = $_GET['query'];
    $colore = $_GET['colore'];

    // Mi ritorna il colore dell'auto che ha la chiave
    // uguale al valore di $cerco
    $colore_auto = $auto[$cerco];

    // se $cerco = "Ford Mustang" ad esempio mi ritorna giallo

    echo $colore_auto;


?>

<form>
    <label>Cerca: </label>
    <input name="query" type="text">
    <br>
    <label>Colore: </label>
    <input type="color" name="colore">
    <button>Invia</button>
</form>