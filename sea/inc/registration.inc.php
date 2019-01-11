<?php
require_once('common.inc.php');

$name = $_POST['login'] ?? '';
$password = $_POST['password'] ?? '';
$registredUsers = getUserInfoByName($name);

if (!empty($registredUsers)) {
    echo json_encode(['error_code' => ERR_USER_EXIST]);
    return;
}
$hash_password =  password_hash($password, PASSWORD_BCRYPT);
$userId = registerUser($name, $hash_password);
createUserRecordScore($userId);
header('Content-Type: text/json');
echo json_encode(['success' => $name]);


