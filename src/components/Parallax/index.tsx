import React, {useState, useEffect} from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
	const [screenX, setScreenX] = useState(0);
	const [screenY, setScreenY] = useState(0);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			// console.log('####: event', event.screenX);
			// console.log('####: event', event.screenY);
			screenX(event.screenX);
			screenX(event.screenY);
		};

		window.addEventListener('mousemove', () => {

		});

		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [screenX, screenY]);

    return (
        <div className={s.root}>
            <div
                className={s.smallPokeBall}
                style={{
                	transform: `translate(${screenY * 0.05}px, ${screenY * 0.05}px)`
                }}
            >
                <img src={SmallPokeBallPng} alt="Small PokeBall" />
            </div>
            <div
                className={s.cloud}
                style={{
                	transform: `translate(${screenY * 0.04}px, ${screenY * 0.04}px)`
                }}
            >
                <img src={CloudPng} alt="Cloud PokeBall" />
            </div>
            <div
                className={s.cloudBig}
                style={{
                	transform: `translate(${screenY * 0.03}px, ${screenY * 0.03}px)`
                }}
            >
                <img src={CloudBigPng} alt="Cloud Big PokeBall" />
            </div>

            <div
                className={s.pokeBall}
                style={{
                	transform: `translate(${screenY * 0.02}px, ${screenY * 0.02}px)`
                }}
            >
                <img src={PokeBallPng} alt="Big PokeBall" />
            </div>
            <div
                className={s.pikachu}
                style={{
                	transform: `translate(${screenY * 0.01}px, ${screenY * 0.01}px)`
                }}
            >
                <img src={PikachuPng} alt="Cloud PokeBall" />
            </div>
        </div>
    );
};

export default Parallax;