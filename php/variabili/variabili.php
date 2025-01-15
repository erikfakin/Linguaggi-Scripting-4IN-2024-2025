<?php

// informazioni su php 
// phpinfo();

// integer - numero intero
$variabile = 10;
// Scrive informazioni sulla variabile
echo "$variabile: " . gettype($variabile);

echo "<br>";

// double - numero decimale
$decimali = 0.43;
echo "$decimali: " . gettype($decimali);

echo "<br>";

$stringa = "abcd";
echo "$stringa: " . gettype($stringa);

echo "<br>";

$lista = [1, 4, 6, 7];
// Non posso fare echi $lista perche non e' possibile converitre
// una lista in una stringa direttamente.
// Uso percio' print_r
print_r($lista);
echo "<br>";
$lista_associativa = [
    "nome" => "Erik",
    "colore" => "Blu"
];
print_r($lista_associativa);




