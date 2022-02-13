<?php

if(isset($_POST)) {
    $dataArr = [];
    foreach($_POST as $data => $value) {
        $dataArr[$data] = $value;
    }
    echo json_encode($dataArr, JSON_PRETTY_PRINT);
}