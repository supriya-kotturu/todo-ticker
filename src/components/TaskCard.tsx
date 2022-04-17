import React from 'react';
import { Task } from '../Interfaces';
import { Input, Card } from './UI';
import styles from './TaskCard.module.css';

interface TaskCardProps {
	task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
	return (
		<div className={styles['task-container']}>
			<Card>
				<h1>{task.timer}</h1>
				<h2>{task.status}</h2>
				{task.list.map((todo) => (
					<Input
						title={todo.title}
						value={todo.status}
						type='checkbox'
						handleChange={() => {}}
						id={todo.id}
						label={todo.title}
					/>
				))}
			</Card>
		</div>
	);
};
