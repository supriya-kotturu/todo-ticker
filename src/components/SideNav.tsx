import React from 'react';
import { Filter } from '../Interfaces';
import { Button } from './UI';

interface SideNavProps {
	filter: Filter;
	handleFilter: React.Dispatch<React.SetStateAction<Filter>>;
}
export const SideNav = ({ filter, handleFilter }: SideNavProps) => {
	return (
		<div>
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
