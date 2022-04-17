import { Routes, Route } from 'react-router-dom';

import { AddTask } from './components/pages/AddTask';
import { Home } from './components/pages/Home';
import { Container } from './components/UI';

function App() {
	return (
		<Container>
			<Routes>
				<Route path='/add-task' element={<AddTask />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</Container>
	);
}

export default App;
