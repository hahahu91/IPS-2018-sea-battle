<?php
require_once('inc/common.inc.php');

$username = getFromSession('username');
$pas = getPasswordByName($username)[0]["user_password"];
$results = getDataFromStorage($username)[0];
$wins = $results['wins'];
$loses = $results['loses'];

$vars1 = array('username' => $username, 'password' => $pas, 'wins' => $wins, 'loses' => $loses);

echo getView('personal_page.inc.twig', $vars1);