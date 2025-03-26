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

print_r($pagamenti);

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