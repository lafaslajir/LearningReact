import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './someReducer.js';

const rootReducer = combineReducers({
    someState: someReducer
});

export default rootReducer;
