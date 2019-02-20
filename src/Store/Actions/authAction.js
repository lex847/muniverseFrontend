import { createBrowserHistory } from 'history';

import Constant from '../../Helpers/constant';
import service from '../../Helpers/services';

const history = createBrowserHistory();

export default {
    login,
    logout,
    register,
    getAll,
    delete: _delete,
    clearError
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        service.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

}
function request(user) {
    return { type: Constant.LOGIN_REQUEST, user }
}
function success(user, msg = false) {
    return { type: Constant.LOGIN_SUCCESS, user, msg }
}
function failure(msg) {

    return { type: Constant.LOGIN_FAILURE, msg }
}
function clearError() {
    return { type: Constant.AUTH_ERROR_CLEAR }
}


function logout() {
    service.logout();
    return { type: Constant.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        service.register(user)
            .then(
                user => {
                    dispatch(success(JSON.parse(user).data, "Confirm your email!"));
                    history.push('/confirm');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };


}

function getAll() {
    return dispatch => {
        dispatch(request());

        service.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };


}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        service.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };
}