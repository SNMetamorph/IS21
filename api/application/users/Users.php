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
        return array(
            'status' => 'ok'
        );
    }

    public function logout($token)
    {
        $this->db->removeToken($token);
        return array(
            'status' => 'ok'
        );
    }

}
