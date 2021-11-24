class Signup {
    constructor () {
        this.divId = 'signup';
    }

    funcsBtn() {
        const output = document.getElementById('output');
        const loginInput = document.getElementById('login');
        const nameInput = document.getElementById('name');
        const loginBtn = document.getElementById('loginBtn');
        const passwordInput = document.getElementById('password');
        const signupBtn = document.getElementById('signupBtn');

        async function sendInfo(name, login, password) {
            const answer = await fetch(
                `api/?method=signup&name=${name}&login=${login}&password=${password}`
            );
            return await answer.json();
        }

        async function checkLog(login) {
            const answer = await fetch(
                `api/?method=checklog&login=${login}`
            );
            return await answer.json();
        }

        signupBtn.addEventListener('click', async function () {
            let login = loginInput.value;
            let password = passwordInput.value;
            let name = nameInput.value;

            let validate = await checkLog(login);

            if (validate['data']) {
                console.log()
                if(validate['data'].status == true) {

                    let answer = await sendInfo(name, login, password);

                    if (answer['data']) {
                        const reanswer = answer['data'].name;
                        output.innerHTML = `Вы успешно зарегистрировались, ${reanswer}!`;
                    }

                } else {
                    output.innerHTML = `Данный логин уже занят.`;
                }
            }

        });

        loginBtn.addEventListener('click', function () {
            const auth = new Auth();
            const form = new Form();
            form.insertTemplate(auth.divId);
        });

    }
    
    signupRender() {
        const signupDiv = document.getElementById(`${this.divId}`);
        if (signupDiv) {
            //this.signupElem();
            this.funcsBtn();
        }
        //document.getElementById(this.id).innerHTML = 'Registration'; 
        /*написал этот класс чисто проверить как работает смена дивов,
        не удивляйся почему после нажатия на кнопку авторизации вылезает регистрация*/
    }
}