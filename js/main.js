async function backendLogin(login, password) {
    const answer = await fetch(
        `api/?method=login&login=${login}&password=${password}`     //это отчаяние, потом нужно убрать method
    );
    return await answer.json();
}

async function backendSignup(name, login, password) {
    await fetch(
        `api/?method=signup&name=${name}&login=${login}&password=${password}`
    );
}

async function backendLogout(id) {
    await fetch(
        `api/?method=logout&id=${id}`
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
        let data = await backendLogin(login, password);
        user = data['data'];
        output.innerHTML = 'Welcome, ' + user.name;
    });

    document.getElementById('logout-btn').addEventListener('click', async function() {
        await backendLogout(user)
    });

    document.getElementById('signup-btn').addEventListener('click', async function() {
        let login = loginInput.value;
        let password = passwordInput.value;
        let data = await backendSignup(login, login, password);
        user = data['data'];
    });
}