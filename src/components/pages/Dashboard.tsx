import React, { useCallback, useEffect } from 'react';
import { Task } from '../../Interfaces';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../../redux/task';
import { useAppDispatch, useAppSelector } from '../../redux';
import { TaskCard } from '../TaskCard';
import styles from './Dashboard.module.css';
import { Button } from '../UI';

export const Dashboard = () => {
	const { tasks } = useAppSelector((state) => state.tasks);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTasks());
	}, []);

	return (
		<>
			<div className={styles['button-container']}>
				<Link to='/add-task' style={{ textDecoration: 'none' }}>
					<Button title='Add Task' type='submit' handleClick={() => {}} />
				</Link>
			</div>
			<br />
			<div className={styles['tasks-container']}>
				{tasks.map((task: Task) => (
					<TaskCard task={task} />
				))}
			</div>
		</>
	);
};
