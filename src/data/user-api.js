import { throwIfNotSuccess } from './helper';

const URI = 'api/admin/user';

function fetchUser() {
    return fetch(URI, { credentials: 'include' })
        .then(throwIfNotSuccess)
        .then(response => response.json());
}
export default {
    fetchUser,
};
