import { combineReducers } from 'redux';

import {authReducer} from './auth';
import {chatReducer} from './chat';
import {UserListingReducer} from './listings'

export const reducers = combineReducers({authReducer, chatReducer, UserListings: UserListingReducer});