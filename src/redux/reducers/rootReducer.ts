import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userReducer'
export const rootReducer = combineReducers({ userReducer })
export type RootState = ReturnType<typeof rootReducer>