<?php

require_once("common.inc.php");

function getDataFromStorage($name) {
    $userID = getUserIdByName($name)[0]['user_id'];
    $getResultQuery = "SELECT wins, loses 
    FROM " . RESULT_TABLE . " WHERE user_id = '" . dbQuote($userID) . "';";
    $result = dbQueryGetResult($getResultQuery);
    return $result; 
}


