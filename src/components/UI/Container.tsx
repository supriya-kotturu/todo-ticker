import React, { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return <div className={styles['container']}>{children}</div>;
};
