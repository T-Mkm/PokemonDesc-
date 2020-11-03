import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';
// import './custom.css';
import HeaderBlock from './components/HeaderBlock';
import BodyBlock from './components/BodyBlock';
import FooterBlock from './components/FooterBlock';


// <div className={cn(s.header, 'color')}>
// 	This is App component!
// </div>
// )


const App = () => {
	console.log('####: Some log');

	return (
		<React.Fragment>
	      <HeaderBlock title="Keep in Touch with React" descr="Chaos philosophy ocean zarathustra hope mountains virtues decrepit inexpedient insofar strong depths ocean insofar. Disgust virtues eternal-return law enlightenment sea disgust grandeur evil ubermensch eternal-return christian war. Transvaluation ocean suicide god merciful. Pinnacle noble revaluation spirit reason intentions selfish christian. Ascetic merciful pinnacle joy god truth of gains victorious convictions."/>
	      <BodyBlock />
	      <FooterBlock />
	    </React.Fragment>
    );
};

export default App;