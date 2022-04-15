import { Todo } from '../Interfaces';

export const getIndex = (todoList: Todo[], todo: Todo): number => {
	for (let i = 0; i < todoList.length; i++) {
		if (todoList[i].id === todo.id) {
			return i;
		}
	}
	return -1;
};
