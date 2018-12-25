<?php
require_once('inc/common.inc.php');
$vars = array(
    'name' => 'Stephen King', 
    'books' => array(
        'Pet Sematary', 'Christine', 'Needful Things'));
echo getView('setting.inc.twig', $vars);