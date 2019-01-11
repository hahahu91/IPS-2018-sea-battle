<?php

function getUserInfoByName($name)
{
    $findUserQueryString = "SELECT user_name FROM " . USER_TABLE .  " WHERE user_name = '" . dbQuote($name)  . "'";
    return dbQueryGetResult($findUserQueryString);
}

function getUserIdByName($name)
{
    $getUserIdQueryString = "SELECT user_id FROM " . USER_TABLE .  " WHERE user_name = '" . dbQuote($name)  . "'";
    return dbQueryGetResult($getUserIdQueryString);
}

function registerUser($name, $pass)
{
    $insertNewUserQueryString = "INSERT INTO " . USER_TABLE . " (user_name, user_password, registration_date) 
    VALUES ('" . dbQuote($name) . "', '" . dbQuote($pass) . "', '" . date("Y-m-d") . "')";
    dbQuery($insertNewUserQueryString);
    return dbGetLastInsertId();
} 
function createUserRecordScore($userID) {
    $saveScoreQueryString = "INSERT INTO " . RESULT_TABLE . "(user_id, game_date, wins, loses) 
            VALUES ('" . dbQuote($userID) . "', '" . date("Y-m-d") . "', '0', '0')";
    echo $saveScoreQueryString;
    dbQuery($saveScoreQueryString);
    return $userID;        
}
function getPasswordByName($name)
{
    $getPasswordQueryString = "SELECT user_password FROM " . USER_TABLE .  " WHERE user_name = '" . dbQuote($name)  . "'";
    return dbQueryGetResult($getPasswordQueryString);
}

function checkPassword($name, $password)
{
    $validPasswordHash = getPasswordByName($name)[0]["user_password"];
    return password_verify($password, $validPasswordHash);
}