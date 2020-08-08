<?php


function PDOauth() {
	$host = "localhost";
	$user = "";
	$pass = "";
	$dbname = "";
	return [
		"mysql:host=$host;dbname=$dbname;charset=utf8mb4",
      $user,
      $pass
	];
}