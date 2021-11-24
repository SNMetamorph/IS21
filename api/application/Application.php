<?php

require_once('db/DB.php');
require_once('users/Users.php');

class Application
{

    function __construct()
    {
        $db = new DB();
        $this->users = new Users($db);
    }

    public function login($params)
    {
        if ($params['login'] && $params['password']) {
            return $this->users->login($params['login'], $params['password']);
        }
    }

    public function signup($params)
    {
        if ($params['name'] && $params['login'] && $params['password']) {
            return $this->users->signup($params['name'], $params['login'], $params['password']);
        }
    }

    public function logout($params)
    {
        return $this->users->logout($params['token']);
    }

    public function checklog($params)
    {
        return $this->users->checklog($params['login']);
    }

    public function checkCookie()
    {
        if($_COOKIE) {
            $token = $_COOKIE['token']; //токен хорошо прилетел
            return $this->users->getUserFromToken($token);
        } else {
            return array(
                'status' => 'no'
            ); //??????
        }
    }
}
