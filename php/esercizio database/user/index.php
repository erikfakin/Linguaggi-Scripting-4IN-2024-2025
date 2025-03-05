<?php
$id = $_GET['id'];

$db = new mysqli("localhost", "root", "", "ecommerce");
$result = $db->query("SELECT * FROM users WHERE id=$id");

$users = $result->fetch_all(MYSQLI_ASSOC);
foreach($users as $user){
?>
<div>
    <h2><?php echo $user['name']?></h2>
    <p><?php echo $user['email']?></p>
    <p><?php echo $user['password']?></p>
    <p><?php echo $user['address']?></p>
</div>
<?php }
