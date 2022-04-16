import { Dispatch } from 'redux';
import { Task } from '../../Interfaces';
import { FetchTasks, TaskState } from './taskTypes';
import { TaskActions } from './taskTypes';
// import { AppThunk } from '../store';
import { getItemFromLocalStorage } from '../../utils';

export const fetchTasks = (): TaskActions => ({
	type: 'FETCH_TASKS',
	payload: {
		// loading: true,
		tasks: getItemFromLocalStorage('tasks'),
		// error: '',
	},
});

const fecthSuccess = (tasks: Task[]): TaskActions => ({
	type: 'FETCH_TASKS_SUCCESS',
	payload: {
		// loading: false,
		tasks: tasks,
		// error: '',
	},
});

const fetchFail = (error: string): TaskActions => ({
	type: 'FETCH_TASKS_FAIL',
	payload: {
		// loading: false,
		tasks: [],
		// error,
	},
});

export const updateTasks = (tasks: Task[]): TaskActions => ({
	type: 'UPDATE_TASKS',
	payload: {
		// loading: false,
		tasks,
		// error: '',
	},
});

// export const fetchTasks =
// 	(): AppThunk => async (dispatch: Dispatch<FetchTasks>) => {
// 		dispatch(fecth());
// 		try {
// 			const tasks = getItemFromLocalStorage('tasks');
// 			tasks.length > 0
// 				? dispatch(fecthSuccess(tasks))
// 				: dispatch(fecthSuccess([]));
// 		} catch (error: any) {
// 			const e = error && error.message ? error?.message : '';
// 			dispatch(fetchFail(e));
// 		}
// 	};
