import React, { useCallback, useEffect, useState } from 'react';
import { AddTask } from './AddTask';
import { Task } from '../../Interfaces';
import { fetchTasks } from '../../redux/task';
import { useAppDispatch, useAppSelector } from '../../redux';

export const Dashboard = () => {
	const { tasks } = useAppSelector((state) => state.tasks);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTasks());
	}, []);

	return (
		<div>
			{tasks.map((task: Task) => (
				<p key={task.id}>{task.timer}</p>
			))}
		</div>
	);
};
