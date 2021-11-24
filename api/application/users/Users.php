<?php
class Users
{
    function __construct($db)
    {
        $this->db = $db;
    }

    public function login($login, $password)
    {
        $user = $this->db->getUser($login);
        if ($user) {
            $user->token = $this->db->addToken($user->id);
            if ($password == $user->password) {
                $token = $user->token; //
                setcookie('token',$token, 0, '/'); //добавили куки
                return array(
                    'status' => 'ok',
                    'name' => $user->name,
                    'token' => $user->token
                );
            }
            else {
                return array(
                    'status' => 'invalid password'
                );
            }
        }
        else {
            return array(
                'status' => 'user not registered'
            );
        }
    }

    public function signup($name, $login, $password)
    {
        $this->db->addUser($name, $login, $password);
        $user = $this->db->getUser($login);
        if ($user) {
            return array(
                'status' => 'ok',
                'name' => $user->name,
            );
        }
    }

    public function logout($token)
    {
        $this->db->removeToken($token);
        setcookie('token', null, -1, '/');
        //setcookie('token', $token, -20, '/');
        return array(
            'status' => 'ok'
        );
    }

    public function getUserFromToken($token) {
        $user = $this->db->getUserFromToken($token);
        if ($user) {
            $login = $user->login;
            $password = $user->password;
            return array(
                'status' => 'ok',
                'name' => $user->name,
                'token' => $user->token
            );; //беда с передачей. Не знаю что закинуть в аргумент
        }
    }

    public function checklog($login) //Проверка на наличие логина в базе данных при регистрации
    {
        $user = $this->db->getUser($login);
        if($user) {
            return array(
                'status' => false,
            );
        } else {
            return array(
                'status' => true
            );
        }
    }

}
