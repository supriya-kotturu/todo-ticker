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
	isDisabled?: boolean;
	isExpired?: boolean;
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
	isDisabled,
	isExpired,
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
						className={
							isExpired
								? `${styles['input-checkbox']} ${styles['input-checkbox-expired']}`
								: styles['input-checkbox']
						}
						type={type}
						id={id}
						name={title}
						value={title}
						onChange={handleChange}
						disabled={isDisabled}
					/>

					<label
						className={
							isDisabled
								? `${styles['input-checkbox-label-disabled']} ${styles['input-checkbox-label']}`
								: `${styles['input-checkbox-label']}`
						}
						htmlFor={title}
					>
						{label}
					</label>
				</div>
			);
	}
};
