class Auth {
    constructor() {
        this.divId = 'auth'; /*Правильно ли я оформил переменную или
        ее стоит объявить за пределами конструктора?*/
    }

    funcsBtn(){
        const output = document.getElementById('output');
        const loginInput = document.getElementById('login');
        const loginBtn = document.getElementById('loginBtn');
        const passwordInput = document.getElementById('password');
        const signupBtn = document.getElementById('signupBtn');

        async function getLoginAndPassword(login, password) {
            const answer = await fetch(
                `api/?method=login&login=${login}&password=${password}`
            );
            return await answer.json();
        }

        signupBtn.addEventListener('click', function () {
            const form = new Form();
            const signup = new Signup();
            form.insertTemplate(signup.divId);
        });

        loginBtn.addEventListener('click', async function () {
            let login = loginInput.value;
            let password = passwordInput.value;
            let answer = await getLoginAndPassword(login, password);
            if (answer['data'].status == 'ok') {
                const form = new Form();
                const menu = new Menu();
                form.insertTemplate(menu.divId, answer['data']);
            } else output.innerHTML = 'Введены неверные авторизационные данные!'; 
        });
    }

    authRender() { 
        const authDiv = document.getElementById(`${this.divId}`);
        if(authDiv) {
            //this.authElem();
            this.funcsBtn();
        }
    }
}