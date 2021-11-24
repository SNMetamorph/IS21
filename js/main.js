window.onload = async function() {
    async function getPlan() {
        const answer = await fetch(
            `api/?method=checkCookie`
        );
        return await answer.json();
    }
    async function start() {
        let answer = await getPlan();
        if (answer) {
            if (answer['data'].status == 'no') {
                const auth = new Auth();
                const form = new Form();
                form.insertTemplate(auth.divId);
            } else if (answer['data'].status == 'ok') {
                console.log(answer, answer['data'])
                const menu = new Menu();
                const form = new Form();
                form.insertTemplate(menu.divId, answer['data']);
            }
        }
        
    }
    start();
}