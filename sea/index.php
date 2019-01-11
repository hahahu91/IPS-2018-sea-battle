<?php
require_once('inc/common.inc.php');
$username = getFromSession('username') ?? "";
$vars1 = array('username' => $username);
if (empty($username)) {
    echo getView('index.inc.twig', $vars1);
} else {
    echo getView('index_personal_page.inc.twig', $vars1);
}