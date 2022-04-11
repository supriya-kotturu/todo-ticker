import { useState } from 'react';
import styles from './App.module.css';

import { Card, Container, Input } from './components/UI';

function App() {
	return (
		<Container>
			,
			<Card>
				<h1>No Tasks</h1>
				<Input
					type='text'
					title='task'
					value='er'
					label='Task'
					showLabel={true}
					handleChange={() => console.log('er')}
				/>
				<Input
					type='text'
					title='task'
					value='er'
					label='Task'
					showLabel={true}
					handleChange={() => console.log('er')}
				/>
				<Input
					type='checkbox'
					title='task todo'
					label='task-1'
					value='"red'
					handleChange={() => console.log('er')}
				/>
				<Input
					type='checkbox'
					title='task todo'
					label='task-1'
					value='"red'
					handleChange={() => console.log('er')}
				/>
			</Card>
		</Container>
	);
}

export default App;
