import React from 'react';
import s from './FooterBlock.module.css';

console.log('###: s', s);

const FooterBlock = () => {
	return (
		<div className={s.cover}>

			Created in {(new Date().getFullYear())}

		</div>
		);
}


export default FooterBlock;
