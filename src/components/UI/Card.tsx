import React, { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
	children: ReactNode;
}

export const Card = React.memo(({ children }: CardProps) => {
	return (
		<div className={styles['card']}>
			<>{children}</>
		</div>
	);
});
