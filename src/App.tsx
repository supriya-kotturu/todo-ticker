import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './components/pages/Dashboard';
import { AddTask } from './components/pages/AddTask';

function App() {
	return (
		<Routes>
			<Route path='/add-task' element={<AddTask />} />
			<Route path='/dashboard' element={<Dashboard />} />
		</Routes>
	);
}

export default App;
