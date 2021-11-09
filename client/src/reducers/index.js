import { authReducer } from "./auth";
import { listingReducer,UserListingReducer,currentListing } from "./listings";
import {chatReducer,contactsReducer,Recipient} from './chat';
import { combineReducers } from 'redux';
import { OtpReducer } from "./otp";
import { tradesReducer } from "./trade";

export const reducers = combineReducers({ auth: authReducer, listings: listingReducer, trades:tradesReducer, chatReducer, UserListings: UserListingReducer,contactsReducer,Recipient, otp:OtpReducer, currentListing});

