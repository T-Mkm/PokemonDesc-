import React from 'react';
// import cn from 'classnames';

import s from './Heading.module.scss';

const Heading: React.FC = ({children}) => {
	return (
		<h1 className={s.root}>
			{children}
		</h1>
	);
};

export default Heading;