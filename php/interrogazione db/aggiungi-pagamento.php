<?php
// Connessione al database
$host = 'localhost';  // Modifica con il tuo host
$username = 'root';   // Modifica con il tuo username
$password = '';       // Modifica con la tua password
$database = 'ecommerce'; // Modifica con il nome del tuo database

// Creazione della connessione
$conn = new mysqli($host, $username, $password, $database);

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Controlla se il modulo è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Estrazione dei dati dal modulo
    $order_id = $_POST['order_id'];
    $amount = $_POST['amount'];
    $payment_method = $_POST['payment_method'];
    $status = $_POST['status'];
    $created_at = $_POST['created_at'];

    // Prepara la query SQL per l'inserimento
    $sql = "INSERT INTO payments (order_id, amount, payment_method, status, created_at) 
            VALUES (?, ?, ?, ?, ?)";

    // Usa una dichiarazione preparata per evitare SQL Injection
    if ($stmt = $conn->prepare($sql)) {
        // Associa i parametri
        $stmt->bind_param("sdsss", $order_id, $amount, $payment_method, $status, $created_at);

        // Esegui la query
        if ($stmt->execute()) {
            echo "Pagamento aggiunto con successo!";
        } else {
            echo "Errore durante l'inserimento: " . $stmt->error;
        }

        // Chiudi la dichiarazione
        $stmt->close();
    } else {
        echo "Errore nella preparazione della query: " . $conn->error;
    }
}

// Chiudi la connessione al database
$conn->close();

header("Location: ". $_SERVER['HTTP_REFERER']);
?>
