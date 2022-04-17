import React from 'react';
import { Task } from './../Interfaces';
import { Link } from 'react-router-dom';
import { TaskCard } from './TaskCard';
import styles from './Dashboard.module.css';
import { Button } from './UI';

interface DashboardProps {
	tasks: Task[];
}

export const Dashboard = ({ tasks }: DashboardProps) => {
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
					<TaskCard task={task} key={task.id} />
				))}
			</div>
		</>
	);
};
