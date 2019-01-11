<?php

require_once("common.inc.php");
$isWin = ($_POST['isWin'] === 'true');
$username = getFromSession('username') ?? "";
if (!empty($username)) {
    saveScore($username, $isWin);
}

function saveScore($name, $isWin) {
    $userID = getUserIdByName($name)[0]['user_id'];
    $saveScoreQueryStringIsWin = "UPDATE " . RESULT_TABLE . " SET game_date ='" . date("Y-m-d") . "', wins = `wins` + 1 
        WHERE user_id = '" . dbQuote($userID) . "';";
    $saveScoreQueryStringIsLoss = "UPDATE " . RESULT_TABLE . " SET game_date ='" . date("Y-m-d") . "', loses = `loses` + 1  
        WHERE user_id = '" . dbQuote($userID) . "';";
    ($isWin) ? dbQuery($saveScoreQueryStringIsWin) : dbQuery($saveScoreQueryStringIsLoss);

    if (!$isWin) {
        echo $saveScoreQueryStringIsLoss;
    } else {
        echo $saveScoreQueryStringIsWin;
    }
    return dbGetLastInsertId();
}