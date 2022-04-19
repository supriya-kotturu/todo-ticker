import React from 'react';
import { Filter } from '../Interfaces';
import { Button } from './UI';
import { AiFillHome, AiOutlineClose } from 'react-icons/ai';
import styles from './SideNav.module.css';

interface SideNavProps {
	filter: Filter;
	handleFilter: React.Dispatch<React.SetStateAction<Filter>>;
	handleShowNav: () => void;
}
export const SideNav = ({
	filter,
	handleFilter,
	handleShowNav,
}: SideNavProps) => {
	return (
		<div>
			<div className={styles['icons-container']}>
				<AiFillHome size={28} onClick={() => handleShowNav()} />
				<AiOutlineClose size={28} onClick={() => handleShowNav()} />
			</div>
			<Button
				type={filter === 'running' ? 'selected' : 'button'}
				title='Running'
				handleClick={() => handleFilter('running')}
			/>
			<Button
				type={filter === 'expired' ? 'selected' : 'button'}
				title='Expired'
				handleClick={() => handleFilter('expired')}
			/>
			<Button
				type={filter === 'all' ? 'selected' : 'button'}
				title='All'
				handleClick={() => handleFilter('all')}
			/>
		</div>
	);
};
