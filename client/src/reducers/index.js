import { authReducer } from "./auth";
import { listingReducer,UserListingReducer } from "./listings";
import {chatReducer,contactsReducer,Recipient} from './chat';
import { combineReducers } from 'redux';
import { tradesReducer } from "./trade";
import { OtpReducer } from "./otp";
export const reducers = combineReducers({ auth: authReducer, listings: listingReducer, trades:tradesReducer, otp:OtpReducer });
