import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './components/pages/Dashboard';
import { AddTask } from './components/pages/AddTask';
import { Container } from './components/UI';

function App() {
	return (
		<Container>
			<Routes>
				<Route path='/add-task' element={<AddTask />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Container>
	);
}

export default App;
