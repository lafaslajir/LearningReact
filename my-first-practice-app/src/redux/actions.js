import { NAVIGATE } from './actionTypes';

export const navigate = (path) => ({
    type: NAVIGATE,
    payload: path,
});
