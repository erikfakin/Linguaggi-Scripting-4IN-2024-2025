<?php

// Dal database leggi tutti gli 'payments' 
// e visualizzali come una lista.
// Aggiungi poi un pulsante per cancellare un payment.


// connettermi al db
$db = new mysqli("localhost", "root", "", "ecommerce");
// leggere tutti i payment dalla tabella payments
$pagamenti = $db->query("SELECT * FROM PAYMENTS");
$pagamenti = $pagamenti->fetch_all(MYSQLI_ASSOC);
// per ogni payment aggiungere una riga in tabella

?>
<table>
    <tr>
        <th>ID</th>
        <th>Order ID</th>
        <th>Amount</th>
        <th>Payment method</th>
        <th>Status</th>
        <th>Created at</th>
        <th>Delete</th>
    </tr>
<?php

foreach($pagamenti as $pagamento){
    ?>
    <tr>
        <td><?php echo $pagamento['id']; ?></td>
        <td><?php echo $pagamento['order_id']; ?></td>
        <td><?php echo $pagamento['amount']; ?></td>
        <td><?php echo $pagamento['payment_method']; ?></td>
        <td><?php echo $pagamento['status']; ?></td>
        <td><?php echo $pagamento['created_at']; ?></td>
        <td>
            <form action="/cancella.php" method="post">
                <input name="pagamento_id" value="<?php echo $pagamento['id']; ?>" type="hidden">    
                <button>Delete</button>
            </form>
        </td>
    </tr>
    <?php
}
?>

</table>

<h2>Aggiungi Nuovo Pagamento</h2>

    <form action="/aggiungi-pagamento.php" method="POST">
        <div>
            <label for="order_id">Order ID:</label>
            <input type="text" id="order_id" name="order_id" required>
        </div>

        <div>
            <label for="amount">Importo (€):</label>
            <input type="number" id="amount" name="amount" step="0.01" required>
        </div>

        <div>
            <label for="payment_method">Metodo di pagamento:</label>
            <select id="payment_method" name="payment_method" required>
                <option value="credit_card">Carta di credito</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Bonifico bancario</option>
                <option value="cash">Contante</option>
            </select>
        </div>

        <div>
            <label for="status">Stato del pagamento:</label>
            <select id="status" name="status" required>
                <option value="pending">In attesa</option>
                <option value="completed">Completato</option>
                <option value="failed">Fallito</option>
                <option value="refunded">Rimborsato</option>
            </select>
        </div>

        
        <button type="submit">Aggiungi Pagamento</button>
    </form>