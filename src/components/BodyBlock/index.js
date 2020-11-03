import React, {useState} from 'react';
import s from './BodyBlock.module.scss';
import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

// console.log('###: s', s);

// const placeholder = 'Enter number';

const answers = ['more', 'less'];

const min = 1,
      max = 100,
      random = min + Math.random() * (max - min);

const color = '#' + String(random).substr(1, 9).replace(".", "");
// items.map(item => <span>{item}</span>)


function BodyBlock() {

    var randNum = useState();
    randNum = random;

	// function refreshPage() {
	// 	randNum = min + Math.random() * (max - min);
	// 	console.log(1);
	// }

	return (
		<React.Fragment>
			<div class={s.cover}>
			    <div class={s.wrap}>
			        <h1 class={s.header}>Your random number is <span style={{color: {color}}}>{randNum}</span> </h1>
			        
			        <ReactLogoSvg />

			        <p class={s.descr}>U have {randNum > 50 ? answers[0] : answers[1]} than 50</p>
			        {/*<button type="submit" onclick={refreshPage}>Reload</button>*/}
			    </div> 
			</div>
		</React.Fragment>
		);
}


export default BodyBlock;