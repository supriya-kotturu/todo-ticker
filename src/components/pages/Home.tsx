import React, { useEffect, useState } from 'react';
import { Filter, Task } from '../../Interfaces';
import { useAppSelector, useAppDispatch } from '../../redux';
import { fetchTasks } from '../../redux/task';
import { SideNav } from '../SideNav';
import { Dashboard } from '../Dashboard';
import { NoTasks } from '../NoTasks';
import { FiMenu } from 'react-icons/fi';
import styles from './Home.module.css';

export const Home = () => {
	const { tasks } = useAppSelector((state) => state.tasks);

	const dispatch = useAppDispatch();

	const [filter, setFilter] = useState<Filter>('all');
	const [showNav, setShowNav] = useState<boolean>(false);
	const [showTasks, setShowTasks] = useState<boolean>(true);
	const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

	useEffect(() => {
		dispatch(fetchTasks());
	}, []);

	useEffect(() => {
		const isMobileOrTablet = () => {
			const { innerWidth: width } = window;
			return width < 880;
		};

		if (isMobileOrTablet()) {
			setShowNav(false);
			setShowTasks(true);
		} else {
			setShowNav(true);
		}
	}, [window]);

	useEffect(() => {
		if (filter === 'all') {
			setFilteredTasks(tasks);
		} else {
			const filteredTasks = tasks.filter((task) => task.status === filter);
			setFilteredTasks(filteredTasks);
		}
	}, [filter]);

	return (
		<div className={styles['home-container']}>
			{tasks.length > 0 ? (
				<>
					{showNav ? (
						<div className={styles['home-side-nav']}>
							<SideNav
								filter={filter}
								handleFilter={setFilter}
								handleShowNav={() => {
									setShowNav((prevHideNav) => !prevHideNav);
									setShowTasks((prevShowTasks) => !prevShowTasks);
								}}
							/>
						</div>
					) : (
						<div className={styles['hamburger-container']}>
							<FiMenu
								size={28}
								onClick={() => {
									setShowNav((prevHideNav) => !prevHideNav);
									setShowTasks((prevShowTasks) => !prevShowTasks);
								}}
							/>
						</div>
					)}
					{showTasks && (
						<div className={styles['home-filter-tasks']}>
							<Dashboard tasks={filteredTasks} />
						</div>
					)}
				</>
			) : (
				<NoTasks />
			)}
		</div>
	);
};
