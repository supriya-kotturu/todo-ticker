import { Task } from '../../Interfaces';

type TaskActionTypes =
	| 'FETCH_TASKS'
	| 'FETCH_TASKS_SUCCESS'
	| 'FETCH_TASKS_FAIL'
	| 'UPDATE_TASKS';

export interface TaskState {
	// loading: boolean;
	tasks: Task[];
	// error: string;
}

export interface FetchTasks {
	type: TaskActionTypes;
	payload: TaskState;
}

export type TaskActions = FetchTasks;
