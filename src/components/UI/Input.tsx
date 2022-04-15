import React from 'react';
import styles from './Input.module.css';

interface InputProps {
	id: string;
	title: string;
	type: 'text' | 'checkbox';
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	label?: string;
	showLabel?: boolean;
}

export const Input = ({
	id,
	title,
	type,
	value,
	handleChange,
	placeholder,
	label,
	showLabel = false,
}: InputProps) => {
	switch (type) {
		case 'text':
			return (
				<div className={styles['input-text-container']}>
					{showLabel && (
						<>
							<label className={styles['input-text-label']} htmlFor={title}>
								{label}
							</label>
							<br />
						</>
					)}
					<input
						className={styles['input-text']}
						id={id}
						name={title}
						type={type}
						value={value}
						onChange={handleChange}
						placeholder={placeholder}
					/>
				</div>
			);
		case 'checkbox':
			return (
				<div className={styles['input-checkbox-container']}>
					<input
						className={styles['input-checkbox']}
						type={type}
						id={id}
						name={title}
						value={title}
					/>
					<label className={styles['input-checkbox-label']} htmlFor={title}>
						{label}
					</label>
				</div>
			);
	}
};
