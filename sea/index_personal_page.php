<?php
require_once('inc/common.inc.php');
$username = getFromSession('username');
$vars1 = array('username' => $username);

echo getView('index_personal_page.inc.twig', $vars1);