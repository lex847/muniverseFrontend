import { userConstants } from '../Constants';
import { userService } from '../Services';
import { alertActions } from './';
import { history } from '../Helpers';

export const userActions = {
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

        userService.login(username, password)
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
    return { type: userConstants.LOGIN_REQUEST, user }
}
function success(user,msg=false) {
    return { type: userConstants.LOGIN_SUCCESS, user,msg }
}
function failure(msg) {
    
    return { type: userConstants.LOGIN_FAILURE, msg }
}
function clearError(){
    return { type: userConstants.AUTH_ERROR_CLEAR}
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success(user,"Confirm your email!"));
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

        userService.getAll()
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

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };
}