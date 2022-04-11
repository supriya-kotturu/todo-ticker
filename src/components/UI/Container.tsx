import React, { Children, ReactChild } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
	children: ReactChild;
}

export const Container = ({ children }: ContainerProps) => {
	return <div className={styles['container']}>{children}</div>;
};
