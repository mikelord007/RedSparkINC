import { authReducer } from "./auth";
import { listingReducer } from "./listings";

import { combineReducers } from 'redux';

export const reducers = combineReducers({ auth: authReducer, listings: listingReducer });
