import React from 'react';
// import HomePage from "./pages/Home";
import {useRoutes} from "hookrouter";
import routes from "./routes";
// import cn from 'classnames';
import NotFoundPage from "./pages/NotFound";


const App = () => {
	// console.log('####: Some log');
	const match = useRoutes(routes);
	// return <HomePage />;
	return match || <NotFoundPage /> ;
};

export default App;