import { Task, Todo } from '../../Interfaces';

type TaskActionTypes =
	| 'FETCH_TASKS'
	| 'FETCH_TASKS_SUCCESS'
	| 'FETCH_TASKS_FAIL'
	| 'UPDATE_TASKS'
	| 'UPDATE_TIMER'
	| 'UPDATE_STATUS'
	| 'UPDATE_TODO_LIST';

export interface TaskState {
	// loading: boolean;
	tasks: Task[];
	// error: string;
}

export interface FetchTasks {
	type:
		| 'FETCH_TASKS'
		| 'FETCH_TASKS_SUCCESS'
		| 'FETCH_TASKS_FAIL'
		| 'UPDATE_TASKS';
	payload: TaskState;
}

export interface UpdateTodoList {
	type: 'UPDATE_TODO_LIST';
	payload: {
		taskId: string;
		newTodoList: Todo[];
	};
}

export interface UpdateTimer {
	type: 'UPDATE_TIMER';
	payload: {
		taskId: string;
		timer: string;
	};
}

export interface UpdateStatus {
	type: 'UPDATE_STATUS';
	payload: {
		taskId: string;
		status: 'running' | 'expired';
	};
}

export type TaskActions =
	| FetchTasks
	| UpdateTodoList
	| UpdateTimer
	| UpdateStatus;
