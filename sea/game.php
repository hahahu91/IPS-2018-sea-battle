<?php
require_once('inc/common.inc.php');
$vars1 = array(
    'name' => 'Stephen King', 
    'books' => array(
        'Pet Sematary', 'Christine', 'Needful Things'));
echo getView('game.inc.twig', $vars1);