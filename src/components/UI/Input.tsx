import React from 'react';
import styles from './Input.module.css';

interface InputProps {
	title: string;
	type: 'text' | 'checkbox';
	value: string;
	handleChange: () => void;
	placeholder?: string;
	label?: string;
	showLabel?: boolean;
}

export const Input = ({
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
						name={title}
						type={type}
						value={value}
						onChange={handleChange}
						placeholder={placeholder}
					/>
				</div>
			);
		case 'checkbox':
			const checkBoxLabel = (
				<label className={styles['input-checkbox-label']} htmlFor={title}>
					{label}
				</label>
			);
			return (
				<div className={styles['input-checkbox-container']}>
					<input
						className={styles['input-checkbox']}
						type={type}
						id={title}
						name={title}
						value={title}
					/>
					{checkBoxLabel}
				</div>
			);
	}
};
