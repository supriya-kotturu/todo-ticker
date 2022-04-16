import { Todo, Task } from '../Interfaces';

export const getIndex = (todoList: Todo[], todo: Todo): number => {
	for (let i = 0; i < todoList.length; i++) {
		if (todoList[i].id === todo.id) {
			return i;
		}
	}
	return -1;
};

export const getItemFromLocalStorage = (label: string): Task[] => {
	return JSON.parse(localStorage.getItem(label) || '[]');
};

export const setItemInLocalStorage = (label: string, item: Task[]): void => {
	localStorage.setItem(label, JSON.stringify(item));
};
