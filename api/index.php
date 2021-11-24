<?php

error_reporting(-1);
require_once('application/Application.php');

function router($params)
{
    $method = $params['method'];
    try {
        if ($method) {
            $app = new Application();
            switch ($method) {
                case 'login':
                    return $app->login($params);
                case 'signup':
                    return $app->signup($params);
                case 'logout':
                    return $app->logout($params);
                case 'checklog':
                    return $app->checklog($params);
                case 'checkCookie':
                    return $app->checkCookie();
            }
        }
        return false;
    } 
    catch (Exception $e) {
        print_r($e->getMessage());
        //die();
        return false;
    }
}

function answer($data)
{
    if ($data) {
        return array(
            'result' => 'ok',
            'data' => $data
        );
    }
    return array('result' => 'error');
}


echo json_encode(answer(router($_GET)));
