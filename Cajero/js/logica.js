let users = [];

function getDataFromJson(){
    fetch('..\\assets\\data.json')
        .then(response => response.json())
        .then(data => normalizeData(data))
}

function normalizeData(data) {
    for (let i=0; i<=data.length-1; i++) {
        const user = {
                username: data[i].username,
                password: data[i].password
        }
        users.push(user);
    }
    return users;
}

function login(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('password').value;
    let success = false;
    
    let i = 0;
    while(!success && (i < users.length)){

        if( (user == users[i].username) && (pass == users[i].password) ){
            success = true;
            window.location.href = "..\\html\\pagina-principal.html";
        }
        i++;
    }
    if(!success && (i == users.length)){
        alert("Credenciales incorrectas");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    getDataFromJson();
});