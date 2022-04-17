import React, { useEffect, useState } from 'react';
import { Filter, Task } from '../../Interfaces';
import { useAppSelector, useAppDispatch } from '../../redux';
import { fetchTasks } from '../../redux/task';
import { SideNav } from '../SideNav';
import { Dashboard } from '../Dashboard';
import styles from './Home.module.css';

export const Home = () => {
	const { tasks } = useAppSelector((state) => state.tasks);

	const dispatch = useAppDispatch();

	const [filter, setFilter] = useState<Filter>('all');
	const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
	console.log(tasks, filteredTasks);

	useEffect(() => {
		dispatch(fetchTasks());
	}, []);

	useEffect(() => {
		if (filter === 'all') {
			setFilteredTasks(tasks);
		} else {
			const filteredTasks = tasks.filter((task) => task.status === filter);
			setFilteredTasks(filteredTasks);
			console.log('hsjhdj', filteredTasks);
		}
	}, [filter]);

	return (
		<div className={styles['home-container']}>
			<div className={styles['home-side-nav']}>
				<SideNav filter={filter} handleFilter={setFilter} />
			</div>
			<div className={styles['home-filter-tasks']}>
				<Dashboard tasks={filteredTasks} />
			</div>
		</div>
	);
};
