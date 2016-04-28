<?php
session_start();
 
$dbhost = "mysql12.000webhost.com";
$dbname = "a6065413_login"; 
$dbuser = "a6065413_login";
$dbpass = "raffle13";
 
mysql_connect($dbhost, $dbuser, $dbpass) or die("MySQL Error: " . mysql_error());
mysql_select_db($dbname) or die("MySQL Error: " . mysql_error());
?>