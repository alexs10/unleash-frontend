export const AUTH_REQUIRED = 'AUTH_REQUIRED';

export function dispatchAndThrow(dispatch, type) {
    return error => {
        if (error.statusCode === 401) {
            dispatch({ type: AUTH_REQUIRED, error, receivedAt: Date.now() });
        } else {
            dispatch({ type, error, receivedAt: Date.now() });
        }
    };
}
