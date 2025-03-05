<form action="/form/crea-prodotto.php" method="post">
    <div>
        <label for="nome">Nome prodotto:</label>
        <input type="text" name="nome" id="nome">
    </div>
    <div>
        <label for="descrizione">Descrizione:</label>
        <textarea name="descrizione" id="descrizione"></textarea>
    </div>
    <div>
        <label for="prezzo">Prezzo:</label>
        <input type="number" name="prezzo" id="prezzo">
    </div>
    <div>
        <label for="stock">Pezzi in magazzino:</label>
        <input type="number" name="stock" id="stock">
    </div>
    <button>Salva prodotto</button>
</form>