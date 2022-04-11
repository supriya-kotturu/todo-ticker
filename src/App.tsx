import { useState } from 'react';
import styles from './App.module.css';

import { Card } from './components/UI/Card';
import { Container } from './components/UI/Container';

function App() {
	return (
		<Container>
			<Card>
				<h1>No Tasks</h1>
			</Card>
		</Container>
	);
}

export default App;
