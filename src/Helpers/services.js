import config from './config';

export default {
    login,
    logout,
    register,
    checkUsername
    // getAll,
    // getById,
    // update,
    // delete: _delete
};
function checkUsername(userName){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName })
    };
    return fetch(config.serverUrl + '/api/v1/auth/checkUserName', requestOptions)
        .then(handleResponse)
        
}
function login(userName, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
    };

    return fetch(config.serverUrl + '/api/v1/auth/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.data.token) {
                localStorage.setItem('user', JSON.stringify(user.data));
            }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch('${config.apiUrl}/users', requestOptions).then(handleResponse);
// }

// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch('${config.apiUrl}/users/${id}', requestOptions).then(handleResponse);
// }

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(config.serverUrl + '/api/v1/auth/signup', requestOptions).then(handleResponse);
}

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         bodry: JSON.stringify(user)
//     };

//     return fetch('${config.apiUrl}/users/${user.id}', requestOptions).then(handleResponse);;
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch('${config.apiUrl}/users/${id}', requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok || data.statusCode === 400) {
            const error = (data && data.msg) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}