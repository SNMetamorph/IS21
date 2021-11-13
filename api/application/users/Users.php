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
        $user->token = $this->db->addToken($user->id);
        if ($user) {
            if ($password == $user->password) {
                return array(
                    'name' => $user->name,
                    'token' => $user->token
                );
            }
        }
    }

    public function signup($name, $login, $password)
    {
        $this->db->addUser($name, $login, $password);
        return array(
            'status' => 'ok'
        );
    }

    public function logout($id)
    {
        $this->db->removeToken($id);
        return array(
            'status' => 'ok'
        );
    }

}
