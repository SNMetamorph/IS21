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

    public function logout()
    {
    }
}
