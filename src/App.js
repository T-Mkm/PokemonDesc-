import React from 'react';
import cn from 'classnames';

import s from './App.css';
import './custom.css';

const App = () => {
	return (
		<div className={cn(s.header, 'color')}>
			This is App component!
		</div>
		)
}

export default App;