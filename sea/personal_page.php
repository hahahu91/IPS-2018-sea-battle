<?php
require_once('inc/common.inc.php');
$username = getFromSession('username');
$pas = getPasswordByName($username)[0]["user_password"];

$vars1 = array('username' => $username, 'password' => $pas);

echo getView('personal_page.inc.twig', $vars1);