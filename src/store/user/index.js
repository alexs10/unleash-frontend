import { Map as $Map } from 'immutable';
import { UPDATE_USER } from './actions';
import { ERROR_FETCH_FEATURE_TOGGLES } from '../feature-actions';

const userStore = (state = new $Map(), action) => {
    switch (action.type) {
        case UPDATE_USER:
            state = state.set('profile', action.value);
            return state;
        case ERROR_FETCH_FEATURE_TOGGLES:
            state = state.set('authDetails', action.error.body).set('showDialog', true);
            return state;
        default:
            return state;
    }
};

export default userStore;
