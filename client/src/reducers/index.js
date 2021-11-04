import { authReducer } from "./auth";
import { listingReducer } from "./listings";

import { combineReducers } from 'redux';
import { tradesReducer } from "./trade";
import { OtpReducer } from "./otp";
export const reducers = combineReducers({ auth: authReducer, listings: listingReducer, trades:tradesReducer, otp:OtpReducer });
