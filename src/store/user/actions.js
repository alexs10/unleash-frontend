import api from '../../data/user-api';
export const UPDATE_USER = 'UPDATE_USER';
export const AUTH_REQUIRED = 'AUTH_REQUIRED';
export const START_FETCH_USER = 'START_FETCH_USER';
const debug = require('debug')('unleash:user-actions');

const updateUser = value => ({
    type: UPDATE_USER,
    value,
});

function handleError(error) {
    debug(error);
}

export function fetchUser() {
    debug('Start fetching user');
    return dispatch => {
        dispatch({ type: START_FETCH_USER });

        return api
            .fetchUser()
            .then(json => dispatch(updateUser(json)))
            .catch(handleError);
    };
}

export function unsecureLogin(path, user) {
    return dispatch => {
        dispatch({ type: START_FETCH_USER });

        return api
            .unsecureLogin(path, user)
            .then(json => dispatch(updateUser(json)))
            .catch(handleError);
    };
}
