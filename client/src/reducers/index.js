import { authReducer } from "./auth";
import { listingReducer } from "./listings";

import { combineReducers } from 'redux';
import { tradesReducer } from "./trade";

export const reducers = combineReducers({ auth: authReducer, listings: listingReducer, trades:tradesReducer });
