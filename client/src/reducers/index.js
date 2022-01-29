import { authReducer } from "./auth";
import { UserListingReducer,currentListing } from "./listings";
import { chatReducer,contactsReducer,Recipient,GButton } from './chat';
import { combineReducers } from 'redux';
import { OtpReducer } from "./otp";
import { tradesReducer } from "./trade";
import { alertsReducer } from "./alerts";

export const reducers = combineReducers({ auth: authReducer, trades:tradesReducer, chatReducer, UserListings: UserListingReducer,contactsReducer,Recipient, otp:OtpReducer, currentListing,alerts:alertsReducer, GButton});
