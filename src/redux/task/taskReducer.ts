import { TaskState, TaskActions } from './taskTypes';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../../utils';
// import { fetchTasks } from './taskActions';

const initialTaskState: TaskState = {
	// loading: false,
	tasks: getItemFromLocalStorage('tasks') || [],
	// error: '',
};

function loadFromLocalStorage() {
	return getItemFromLocalStorage('tasks');
}

export function taskReducer(
	state: TaskState = initialTaskState,
	action: TaskActions,
): TaskState {
	switch (action.type) {
		case 'FETCH_TASKS':
			return {
				...state,
				// loading: true,
				// error: '',
				tasks: loadFromLocalStorage(),
			};
		case 'FETCH_TASKS_SUCCESS':
			return {
				...state,
				// loading: false,
				tasks: action.payload.tasks,
				// error: '',
			};
		case 'FETCH_TASKS_FAIL':
			return {
				...state,
				// loading: false,
				tasks: [],
				// error: action.payload.error,
			};
		case 'UPDATE_TASKS':
			setItemInLocalStorage('tasks', action.payload.tasks);
			// fetchTasks();
			return {
				// loading: false,
				tasks: action.payload.tasks,
				// error: '',
			};
		default:
			return state;
	}
}
