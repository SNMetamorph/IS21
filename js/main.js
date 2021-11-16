async function backendLogin(login, password) {
    const answer = await fetch(
        `api/?method=login&login=${login}&password=${password}`
    );
    return await answer.json();
}

async function backendSignup(name, login, password) {
    await fetch(
        `api/?method=signup&name=${name}&login=${login}&password=${password}`
    );
}

async function backendLogout(token) {
    await fetch(
        `api/?method=logout&token=${token}`
    );
}

window.onload = async function() {
    const output = document.getElementById('output');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    let user = {};

    document.getElementById('login-btn').addEventListener('click', async function() {
        let login = loginInput.value;
        let password = passwordInput.value;
        let respond = await backendLogin(login, password);
        const data = respond['data'];

        if (data.status == 'ok') {
            user.token = data.token;
            user.name = data.name;
            output.innerHTML = 'Добро пожаловать, ' + user.name;
        }
        else if (data.status == 'invalid password') {
            output.innerHTML = 'Пароль введен неправильно';
        }
        else if (data.status == 'user not registered') {
            output.innerHTML = 'Такой пользователь не зарегистрирован';
        }
    });

    document.getElementById('logout-btn').addEventListener('click', async function() {
        if (user.token) {
            await backendLogout(user.token);
        }
    });

    document.getElementById('signup-btn').addEventListener('click', async function() {
        let login = loginInput.value;
        let password = passwordInput.value;
        let respond = await backendSignup(login, login, password);
        user = respond['data'];
    });
}
