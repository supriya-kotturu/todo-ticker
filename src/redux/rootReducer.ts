import { combineReducers } from 'redux';
import { taskReducer } from './task/taskReducer';

export const rootReducer = combineReducers({
	tasks: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
