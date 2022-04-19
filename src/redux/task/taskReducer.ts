import { TaskState, TaskActions } from './taskTypes';
import {
	getIndex,
	getItemFromLocalStorage,
	setItemInLocalStorage,
} from '../../utils';
import { Task, Todo } from '../../Interfaces';
import { stat } from 'fs';
// import { fetchTasks } from './taskActions';

const initialTaskState: TaskState = {
	// loading: false,
	tasks: getItemFromLocalStorage('tasks') || [],
	// error: '',
};

function loadFromLocalStorage() {
	return getItemFromLocalStorage('tasks');
}

const findTask = (taskId: string): number => {
	const tasks: Task[] = getItemFromLocalStorage('tasks');
	let index = -1;
	if (tasks) {
		index = getIndex(tasks, taskId);
	}
	return index;
};

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
		case 'UPDATE_TODO_LIST': {
			const index = findTask(action.payload.taskId);
			const updatedTasks = [...state.tasks];
			updatedTasks[index].list = action.payload.newTodoList;

			return {
				...state,
				tasks: updatedTasks,
			};
		}
		case 'UPDATE_TIMER': {
			const index = findTask(action.payload.taskId);
			const updatedTasks = [...state.tasks];
			updatedTasks[index].timer = action.payload.timer;

			return {
				...state,
				tasks: updatedTasks,
			};
		}
		case 'UPDATE_STATUS': {
			const index = findTask(action.payload.taskId);
			const updatedTasks = [...state.tasks];
			updatedTasks[index].status = action.payload.status;

			return {
				...state,
				tasks: updatedTasks,
			};
		}
		case 'UPDATE_EXPIRED_TODO_LIST': {
			const index = findTask(action.payload.taskId);
			const todoList = [...state.tasks[index].list];
			const expiredTodoList = todoList.map((l) => {
				if (l.status === 'pending') {
					const expiredListItem: Todo = {
						...l,
						status: 'expired',
					};
					return expiredListItem;
				} else {
					return l;
				}
			});

			const updateTasks = [...state.tasks];
			updateTasks[index].list = expiredTodoList;

			return {
				...state,
				tasks: updateTasks,
			};
		}
		default:
			return state;
	}
}
