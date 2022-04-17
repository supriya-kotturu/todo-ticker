import { v4 as uuidv4 } from 'uuid';

export interface Todo {
	id: string;
	title: string;
	status: 'done' | 'pending';
}

export interface Task {
	id: string;
	timer: string;
	list: Todo[];
	status: 'running' | 'expired';
}

export type Filter = 'running' | 'expired' | 'all';
