import React from 'react';
import s from './HeaderBlock.module.scss';

// import ReactLogo from '../../logo.png';
// import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

// console.log('###: ReactLogo', ReactLogo);

// console.log('###: s', s);

// <ReactLogoSvg />

const HeaderBlock = ({title, descr, hideLogo = false}) => {
	
	const styleLogo = hideLogo ? {} : {display: 'none'};

	return (
		<div class={s.cover}>
		    <div class={s.wrap}>
		        {title && <h1 class={s.header}>{title}</h1>}
		        
		        
		        {descr && <p class={s.descr}>{descr}</p>}
		    </div> 
		</div>
		)
}


export default HeaderBlock;