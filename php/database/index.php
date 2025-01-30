<?php

$db = new mysqli("localhost", "root", "", "test_database");

echo $db->host_info . "\n";

$db->query("DROP TABLE IF EXISTS test");
$db->query("CREATE TABLE test(id INT)");
$db->query("INSERT INTO test(id) VALUES (1), (2), (3)");

