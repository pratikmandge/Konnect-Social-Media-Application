import {combineReducers} from 'redux'

import authReducer from './authReducer'
import uploadReducer from './uploadReducer'
import postReducer from './postReducer'

export const reducers = combineReducers({authReducer, uploadReducer, postReducer})