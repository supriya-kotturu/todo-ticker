import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container } from './UI';
import styles from './NoTasks.module.css';

export const NoTasks = () => {
	return (
		<div className={styles['no-tasks-card-container']}>
			<Card>
				<h1>No Tasks</h1>
				<p>Add a timer and set few tasks</p>
				<div className={styles['add-tasks-button-container']}>
					<Link to='/add-task' style={{ textDecoration: 'none' }}>
						<Button title='Add Task' type='submit' handleClick={() => {}} />
					</Link>
				</div>
			</Card>
		</div>
	);
};
