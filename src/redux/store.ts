import { createStore, applyMiddleware, Action, compose } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { setItemInLocalStorage } from '../utils';

const middlewares = [thunk, logger];

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENTION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
store.subscribe(() =>
	setItemInLocalStorage('tasks', store.getState().tasks.tasks),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
