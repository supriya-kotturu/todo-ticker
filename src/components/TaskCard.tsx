import React, { useState, useEffect } from 'react';
import { Task, Todo } from '../Interfaces';
import { Input, Card } from './UI';
import { Ticker } from './Ticker';
import styles from './TaskCard.module.css';
import { getIndex } from '../utils';
import { useAppSelector, useAppDispatch } from '../redux';
import {
	fetchTasks,
	updateStatus,
	updateTimer,
	updateTodoList,
} from '../redux/task';

interface TaskCardProps {
	task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
	const [newTask, setNewTask] = useState<Task>(task);
	const { tasks } = useAppSelector((state) => state.tasks);
	const dispatch = useAppDispatch();

	const fetchTask = (id: string) => {
		const task = tasks.find((task) => task.id === id);
		if (task) {
			return getIndex(tasks, task.id);
		}
	};

	useEffect(() => {
		dispatch(fetchTasks());
		const index = fetchTask(task.id);
		if (index) {
			setNewTask(tasks[index]);
		}
	}, []);

	const updateTimerAndStatus = () => {
		const doneItems = task.list.filter((todo) => todo.status === 'done');
		if (doneItems.length === task.list.length) {
			dispatch(updateStatus(task.id, 'expired'));
			dispatch(updateTimer(task.id, newTask.timer));
		}
	};

	useEffect(updateTimerAndStatus, [task.list]);

	const handleCheckTodoUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask((prevTask: Task) => {
			const newTodo: Todo | undefined = prevTask.list.find(
				(t: Todo) => t.id === e.target.id,
			);

			if (newTodo) {
				switch (newTodo.status) {
					case 'done':
						newTodo.status = 'pending';
						break;
					case 'pending':
						newTodo.status = 'done';
						break;
				}
				const index = getIndex(prevTask.list, newTodo.id);
				if (index !== -1) {
					const targetTodoList = [...prevTask.list];
					targetTodoList[index] = newTodo;
					dispatch(updateTodoList(task.id, targetTodoList));
					return { ...prevTask, list: targetTodoList };
				}
			}
			return prevTask;
		});
		// check if the list of items are done
		// if the todo list status is done, expire the timer
		updateTimerAndStatus();
	};

	return (
		<div className={styles['task-container']}>
			<Card>
				<Ticker task={newTask} />
				{task.list.map((todo) => (
					<Input
						title={todo.title}
						value={todo.title}
						type='checkbox'
						handleChange={(e) => {
							handleCheckTodoUpdate(e);
						}}
						id={todo.id}
						label={todo.title}
						key={todo.id}
						isDisabled={todo.status === 'done'}
					/>
				))}
			</Card>
		</div>
	);
};
