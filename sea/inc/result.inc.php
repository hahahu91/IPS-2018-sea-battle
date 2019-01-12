<?php

require_once("common.inc.php");

function getDataFromStorage($name) {
    $userID = getUserIdByName($name)[0]['user_id'];
    $getResultQuery = "SELECT wins, loses 
    FROM " . RESULT_TABLE . " WHERE user_id = '" . dbQuote($userID) . "';";
    $result = dbQueryGetResult($getResultQuery);
    return $result; 
}

function getTopRatingDataFromStorage() {
    $getTopResultQuery = "SELECT users.user_name, results.wins, results.loses
    FROM " . USER_TABLE . 
    " INNER JOIN " . RESULT_TABLE. " USING (user_id)
    ORDER BY results.wins DESC LIMIT 10";
    $result = dbQueryGetResult($getTopResultQuery);
    return $result; 
}


function getTopResult()
    {
        $data_array = getTopRatingDataFromStorage();
        $indexArray = [];
        $resultArray = [];
        $i = 0;  
        foreach ($data_array as $value) {
            $indexArray = ['position'=> $i + 1];     
            $resultArray[$i] = array_merge($indexArray, $value);
            $i++;
        }
        return ['records' => $resultArray];
    }