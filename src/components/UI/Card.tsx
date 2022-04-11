import React, { ReactChild } from 'react';
import styles from './Card.module.css';

interface CardProps {
	children: ReactChild;
}

export const Card = React.memo(({ children }: CardProps) => {
	return <div className={styles['card']}>{children}</div>;
});
