import React from 'react';
import HomePage from "./pages/Home";
// import cn from 'classnames';

<<<<<<< Updated upstream:src/App.js
import s from './App.css';
import './custom.css';

const App = () => {
	return (
		<div className={cn(s.header, 'color')}>
			This is App component!
		</div>
		)
}
=======
// import s from './App.module.scss';

const App = () => {
	console.log('####: Some log');

	return <HomePage />;
};
>>>>>>> Stashed changes:src/App.tsx

export default App;