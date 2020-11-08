import React from 'react';
import Header from "../../components/Header";
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';


import s from './Home.module.scss';


const HomePage = () => {
	return (
		<div className={s.root}>
			<Header />
			<Layout className={s.contentWrap}>
				<div className={s.contentText}>
					<Heading className={s.heading}>
						<b>Find</b> all your favorite <b>Pokemon</b>
					</Heading>
					<p>You can know the type of Pokemon, its strength, disadvatages and abilities</p>
					<Button onClick={() => console.log('Click Button')} >
						See pokemons
					</Button>
				</div>

				<div className={s.contentParallax}>
					<Parallax />
					{/*We&apos;ll see Parallax here soon...*/}
				</div>
			</Layout>
		</div>
	);
};

export default HomePage;