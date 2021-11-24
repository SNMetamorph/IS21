class Form  {
    constructor (divId, data) {
        this.divId = divId;
        this.data = data;
        this.insertTemplate(divId, data);
    }

    showDiv(divId){
        document.getElementById('show').innerHTML = `<div id = ${divId}></div>`;
    }
    insertTemplate(divId, data) { 
        document.getElementById('show').innerHTML = null;
        this.showDiv(divId);
        const markup = new Markup();
        markup.show(divId);
        switch(divId){
            case 'auth':
                const auth = new Auth();
                auth.authRender();
                break;
            case 'signup':
                const signup = new Signup();
                signup.signupRender();
                break;
            case 'menu':
                const menu = new Menu(data);
                menu.menuRender();
                break;
        }
        
    }
}
