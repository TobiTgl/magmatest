const config = {
    apiUrl: "https://fukyouheroku.herokuapp.com/"
}

export const userService = {
    login,
    logout,
    getCredentials,
    setCredentials,
    config
};

function login(username, password) {
    console.log(JSON.stringify({ username, password }))

    let user = {
        username: username,
        password: password,
    }

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

    const requestOptions = {
        method: 'POST',
        headers: headers,
    };

    return fetch(`${config.apiUrl}login`, requestOptions)
        .then(response => {
            let status = response.status
            if (status === 401) {
                return response.statusText
            }
            if (status === 200) {
                user.authdata = Buffer.from(username + ":" + password).toString('base64')
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');

}

function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}

function getCredentials() {
    return JSON.parse(localStorage.getItem('user'));
}

function setCredentials(){
    let user = {
        username: "admin",
        password: "123456",
        email: "flick86rus1@yandex.ru"
    }
    localStorage.setItem('user', JSON.stringify(user));
}

