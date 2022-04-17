import React, { useEffect, useState } from 'react';
import { Task } from '../Interfaces';
import { useAppDispatch } from '../redux';
import { updateStatus, updateTimer } from '../redux/task';
import styles from './Ticker.module.css';

interface TickerProps {
	task: Task;
}

export const Ticker = ({ task }: TickerProps) => {
	const dispatch = useAppDispatch();
	const { id, timer, status, list } = task;

	const timerArry = timer.split(':');
	const h =
		status === 'running' && timerArry.length === 2 ? parseInt(timerArry[0]) : 0;
	const m =
		status === 'running' && timerArry.length === 2
			? parseInt(timerArry[1]) > 0
				? parseInt(timerArry[1]) - 1
				: parseInt(timerArry[1])
			: parseInt(timerArry[0]) > 0
			? parseInt(timerArry[0]) - 1
			: parseInt(timerArry[0]);
	const s = status === 'running' ? 60 : 0;

	const [hr, setHr] = useState<number>(h);
	const [min, setMin] = useState<number>(m);
	const [sec, setSec] = useState<number>(s);

	const updateTicker = () => {
		const secTimer = sec > 0 && setTimeout(() => setSec(sec - 1), 1000);
		const minTimer = min > 0 && setTimeout(() => setMin(min - 1), 1000 * 60);
		const hrTimer = hr > 0 && setTimeout(() => setHr(hr - 1), 1000 * 60 * 60);

		const clearTimers = () => {
			secTimer && clearTimeout(secTimer);
			minTimer && clearTimeout(minTimer);
			hrTimer && clearTimeout(hrTimer);
		};

		if (status === 'running') {
			switch (timerArry.length.toString()) {
				case '1':
					if (min > 0 && sec === 0) {
						setSec(60);
						dispatch(updateTimer(task.id, `${min}`));
					} else if (min === 0 && sec === 0) {
						dispatch(updateStatus(task.id, 'expired'));
						dispatch(updateTimer(task.id, `${min}`));
						clearTimers();
					}
					break;

				case '2':
					if (hr > 0 && min == 0) {
						setMin(60);
						setSec(60);
						dispatch(updateTimer(task.id, `${hr}:${min}`));
					} else if (min > 0 && sec === 0) {
						setSec(60);
						dispatch(updateTimer(task.id, `${hr}:${min}`));
					} else if (hr === 0) {
						dispatch(updateStatus(task.id, 'expired'));
						dispatch(updateTimer(task.id, `${hr}:${min}`));
						clearTimers();
					}
					break;
			}
		} else {
			setSec(0);
			clearTimers();
		}

		const doneList = list.filter((todo) => todo.status === 'done');
		if (doneList.length === list.length) {
			clearTimers();
		}
	};

	useEffect(updateTicker, [hr, min, sec, task]);

	useEffect(() => {
		// TODO : timer color doesn't change when list is done
		// get the task from root state instead of tempTask, passed as prop
	}, [timer, task]);

	return (
		<div className={styles['ticker']}>
			<h2
				className={
					task.status === 'running'
						? styles[`ticker-running`]
						: styles['ticker-expired']
				}
			>
				{hr < 10 ? '0' + hr : hr} : {min < 10 ? '0' + min : min} :{' '}
				{sec < 10 ? '0' + sec : sec}
			</h2>
		</div>
	);
};
