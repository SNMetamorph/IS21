/* async function getMethod(method) {
    const answer = await fetch(
        `api/?method=${method}`
    );
    return await answer.json();
} */

async function getLoginAndPassword(login, password) {
    const answer = await fetch(
        `api/?method=login&login=${login}&password=${password}`     //это отчаяние, потом нужно убрать method
    );
    return await answer.json();
}

window.onload = async function () {

    const output = document.getElementById('output');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');


    btn.addEventListener('click', async function () {

        let login = loginInput.value;
        let password = passwordInput.value;

        let data =  await getLoginAndPassword(login, password);

        output.innerHTML = data['data'];
    });
}