import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import statReducer from './stat/index';

const reducer = combineReducers({
  stat: statReducer,
});

const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof reducer>
