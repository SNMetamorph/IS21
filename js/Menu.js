class Menu { 
    constructor(userData) {
        this.divId = 'menu';
        this.userData = userData;
    }

    funcsBtn(){
        let info = this.userData;
        if (info) {
            async function logout(token) {
                await fetch(
                    `api/?method=logout&token=${token}`
                );
            }
    
            const logOutBtn = document.getElementById('logOutBtn');
    
            logOutBtn.addEventListener('click', async function() {
                console.log(info)
                if (info) {
                    await logout(info.token);
                }
                info = null;
                const form = new Form();
                const auth = new Auth();
                form.insertTemplate(auth.divId);
            });
        }
        
    }


    menuRender(){
        const menuDiv = document.getElementById(`${this.divId}`);
        if (menuDiv) {
            this.funcsBtn();
        } 
    }
}