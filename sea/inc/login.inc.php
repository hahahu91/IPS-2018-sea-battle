<?php

require_once('common.inc.php');
header("Content-Type: application/json");

$name = $_POST['login'] ?? '';
$password = $_POST['password'] ?? '';
if (empty($name) || empty($password)) {
    echo json_encode(ERR_NO_PARAM);
    return;
}

$registredUsers = getUserInfoByName($name);

if (empty($registredUsers)) {
    echo json_encode(ERR_USER_NOT_EXIST);
    return;
}

if (checkPassword($name, $password)) {
    echo json_encode(ERR_NO_ERROR);
    exit();
} else {
    echo json_encode(ERR_INCORRECT_PASS);
}