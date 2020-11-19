import React from 'react';
// import HomePage from "./pages/Home";
import {useRoutes} from "hookrouter";
import routes from "./routes";
// import cn from 'classnames';
import NotFoundPage from "./pages/NotFound";
import Header from "./components/Header";
import req from "./utils/request";


const App = () => {
	// console.log('####: Some log');

	const match = useRoutes(routes);
	// return <HomePage />;
	return match ? (
		<>
			<Header />
			{match}
		</>
	) : <NotFoundPage /> ;
};

export default App;