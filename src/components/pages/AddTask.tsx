import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Container, Card, Input, Button } from '../UI';

import { Task, Todo } from '../../Interfaces';
import { getIndex } from '../../utils';
import { updateTasks } from '../../redux/task';
import { useAppDispatch, useAppSelector } from '../../redux';

export const AddTask = () => {
	const { tasks } = useAppSelector((state) => state.tasks);
	const dispatch = useAppDispatch();

	const initialTodoItem: Todo = { id: uuidv4(), title: '', status: 'pending' };
	const [todoList, addToTheTodoList] = useState<Todo[]>([initialTodoItem]);
	const [timer, setTimer] = useState<string>('');

	const handleTodoItem = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>, todo: Todo) => {
			addToTheTodoList((prevTodoList: Todo[]) => {
				const newTodo: Todo | undefined = prevTodoList.find(
					(t: Todo) => t.id === todo.id,
				);

				if (newTodo) {
					newTodo.title = e.target.value;
					const index = getIndex(prevTodoList, newTodo.id);
					if (index !== -1) {
						const targetTodoList = [...prevTodoList];
						targetTodoList[index] = newTodo;
						return targetTodoList;
					}
				}
				return prevTodoList;
			});
		},
		[],
	);

	const addBlankTask = useCallback(() => {
		addToTheTodoList((prevTodoList: Todo[]) => {
			return [...prevTodoList, { ...initialTodoItem, id: uuidv4(), title: '' }];
		});
	}, []);

	const handleTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTimer(e.target.value);
	};

	const resetTaskForm = () => {
		addToTheTodoList([{ ...initialTodoItem, title: '' }]);
		setTimer('');
	};

	const handleCreateTask = useCallback(
		(timer, todoList) => {
			const newTask: Task = {
				id: uuidv4(),
				timer: timer,
				list: todoList,
				status: 'running',
			};
			dispatch(updateTasks([newTask, ...tasks]));
			resetTaskForm();
		},
		[timer, todoList],
	);

	return (
		<Container>
			<form action='/'>
				<Card>
					<h1>Add a Task</h1>
					<Input
						id='timer'
						title='timer'
						type='text'
						value={timer}
						placeholder='hh : mm'
						handleChange={(e) => handleTimer(e)}
					/>
					{todoList.map((todo: Todo) => (
						<Input
							key={todo.id}
							id={todo.id}
							title='task'
							type='text'
							value={todo.title}
							placeholder='Walk in the park'
							handleChange={(e) => handleTodoItem(e, todo)}
						/>
					))}
					<div>
						<div style={{ padding: '16px' }}>
							<AiFillPlusCircle
								size={28}
								color='#5ce595'
								onClick={addBlankTask}
							/>
						</div>
					</div>
					<Button
						title='Create'
						type='submit'
						handleClick={() => handleCreateTask(timer, todoList)}
					/>
				</Card>
			</form>
		</Container>
	);
};
