import React, { useCallback, useState } from 'react';
import { Card, Container, Input } from './UI';
import { AddTask } from './AddTask';
import { Task } from '../Interfaces';

export const Dashboard = () => {
	const [tasks, setTasks] = useState<Task[]>(
		JSON.parse(localStorage.getItem('tasks') || '[]') || [],
	);
	const handleAddTask = useCallback((newTask: Task) => {
		console.log(newTask, tasks);
		setTasks((prevTasks) => [newTask, ...prevTasks]);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, []);

	return (
		<div>
			<AddTask handleAddTask={handleAddTask} />
			{tasks.map((task: Task) => (
				<p key={task.id}>{task.timer}</p>
			))}
		</div>
	);
};
