import React from 'react';
import { Task } from './../Interfaces';
import { Link } from 'react-router-dom';
import { TaskCard } from './TaskCard';
import styles from './Dashboard.module.css';
import { Button } from './UI';
import { NoTasks } from './NoTasks';

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
			<div className={styles['status-container']}>
				{tasks ? tasks[0]?.status : 'running'}
			</div>
			<div className={styles['tasks-container']}>
				{tasks &&
					tasks.map((task: Task) => <TaskCard task={task} key={task.id} />)}
				{!tasks.length && <NoTasks />}
			</div>
		</>
	);
};
