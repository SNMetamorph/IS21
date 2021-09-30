<?php
class Users
{

    public function login($login, $password)
    {

        $hashSum = md5($login.$password);
        $sumWithRndNum = md5($hashSum.rand());

        $dbSum = $sumWithRndNum;                //это пока - для проверки
        $name = 'Katya';                        //и это тоже
        
        if ($sumWithRndNum === $dbSum) {        //потом здесь будет алгоритм для поиска соответствующей строки в базе данных

            return $name;                       //просто я хз, как она будет устроена
        } else {
            return new Error();
        }
    }

}
