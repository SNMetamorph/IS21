<?php
class DB
{
    function __construct()
    {
        $host = 'localhost';
        $port = '3306';
        $name = 'racing';
        $user = 'root';
        $password = 'root';

        try {
            $this->db = new PDO(
                'mysql:' .
                    'host=' . $host . ';' .
                    'port=' . $port . ';' .
                    'dbname=' . $name,
                $user,
                $password
            );
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            print_r($e->getMessage());
            die();
        }
    }

    function __destruct()
    {
        $this->db = null;
    }

    public function getUser($login)
    {
        $query = 'SELECT * FROM users WHERE login = "' . $login . '"';
        return $this->db->query($query)->fetchObject();
    }

    public function getUsers()
    {
        $query = 'SELECT * FROM users';
        $stmt = $this->db->query($query);
        $result = array();
        while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
            $result[] = $row;
        }
        return $result;
    }

    public function addUser($name, $login, $password)
    {
        $query = "INSERT INTO `users` (`id`, `name`, `login`, `password`, `token`) VALUES (NULL, '" . $name . "', '" . $login . "', '" . $password . "', NULL)";
        $this->db->query($query);
    }

    public function addToken($id)
    {
        $token = md5(rand());
        $query = "UPDATE `users` SET `token` = '".$token."' WHERE id = ".$id;
        $this->db->query($query);
        return $token;
    }

    public function removeToken($token)
    {
        $query = "UPDATE `users` SET `token` = NULL WHERE token LIKE '".$token."'";
        $this->db->query($query);
    }

    public function getToken($id)
    {
        $query = "";
        return $this->db->query($query)->fetchObject();

    }
}
