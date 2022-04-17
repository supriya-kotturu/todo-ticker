import { Todo, Task } from '../Interfaces';

export const getIndex = (list: Todo[] | Task[], id: string): number => {
	for (let i = 0; i < list.length; i++) {
		if (list[i].id === id) {
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
