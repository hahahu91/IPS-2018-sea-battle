<?php
require_once("common.inc.php");

saveToSession('username', '');

echo json_encode(['result' => '1']);