// import config from 'config';
//import { authHeader } from '../Helpers';
//const config  = "hello";
// import axios from 'axios';

export const userService = {
    login,
    // logout,
    // register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

function login(userName, password) {
    console.log(userName, password);
    // return axios({
    //     method: 'post',
    //     url: 'localhost:3003/api/v1/auth/login',
    //     data: {
    //         userName: userName,
    //         password: password
    //     }
    //   }).then(function(response){
    //       console.log(response);
    //   });
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
    };

    return fetch('http://localhost:3003/api/v1/auth/login', requestOptions)
        .then(handleResponse)
        // .then(function (resp) {
        //     console.log(resp);
        // })
        .then(user => {
            console.log(user);
            // login successful if there's a jwt token in the response
            if (user.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user.data));
            }

            return user;
        });
}

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

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

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch('${config.apiUrl}/users/register', requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
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
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}