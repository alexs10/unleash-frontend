import { UPDATE_USER } from './actions';

const userStore = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER:
            state = action.value;
            return state;
        default:
            return state;
    }
};

export default userStore;
