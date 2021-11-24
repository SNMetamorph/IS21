class Markup {
    constructor () {
    }

    show (divId){
        switch (divId){
            case 'auth' : 
                const authDiv = document.getElementById(`${divId}`);
                authDiv.classList.add('internalDiv');
                authDiv.innerHTML = `
                    <p id ="textInfo">Авторизация</p>
                    <input id = "login" class = "inp" placeholder = "login">
                    <br>
                    <input type="password" id = "password" class = "inp" placeholder = "pasword">
                    <br>
                    <button class = "btn" id = "loginBtn">Войти</button>
                    <div id = "output"></div>
                    <br>
                    <p id = "registText">Новый пользователь?</p>
                    <button class = "btn" id = "signupBtn">Зарегистрироваться</button>
                `;
                break;
            case 'signup' :
                const signupDiv = document.getElementById(`${divId}`);
                signupDiv.classList.add('internalDiv');
                signupDiv.innerHTML = `
                    <p id ="textInfo">Регистрация</p>
                    <br>
                    <input id = "name" class = "inp" placeholder = "nickname">
                    <br>
                    <input id = "login" class = "inp" placeholder = "login">
                    <br>
                    <input id = "password" class = "inp" placeholder = "pasword">
                    <br>
                    <button class = "btn" id = "signupBtn">Зарегистрироваться</button>
                    <br>
                    <div id = "output"></div>
                    <br>
                    <p id = "registText">Уже зарегистрировались?</p>
                    <button class = "btn" id = "loginBtn">Вернуться</button>
                `;
                break;
            case 'menu' :
                const menuDiv = document.getElementById(`${divId}`);
                menuDiv.classList.add('internalDiv');
                menuDiv.innerHTML = `
                    <p id ="textInfo">Меню</p>
                    <br>
                    <button class = "btn" id = "logOutBtn">Выйти</button>
                `;
                break;
        }
    }
}