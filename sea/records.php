<?php
require_once('inc/common.inc.php');

$topResults = getTopResult();
$vars1 = $topResults;

echo getView('records.inc.twig', $vars1);