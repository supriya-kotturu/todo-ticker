import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
	title: string;
	type: 'button' | 'submit' | 'selected';
	handleClick: () => void;
}

export const Button = ({ title, type, handleClick }: ButtonProps) => {
	switch (type) {
		case 'button':
			return (
				<button
					className={styles['button-default']}
					type='button'
					onClick={handleClick}
				>
					{title}
				</button>
			);
		case 'submit':
			return (
				<button
					className={styles['button-submit']}
					type='submit'
					onClick={handleClick}
				>
					{title}
				</button>
			);
		case 'selected':
			return (
				<button
					className={`${styles['button-default']} ${styles['button-selected']}`}
					type='button'
					onClick={handleClick}
				>
					{title}
				</button>
			);
	}
};
