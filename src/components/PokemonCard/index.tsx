import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';

const PokemonCard:React.FC = ({children}) => {
    return (
        <div id={children["id"]} className={s.root}>
            <div className={s.infoWrap}>
                <Heading size='xs' className={s.titleName}>
                    {children["name_clean"]}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {children["stats"]["attack"]}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {children["stats"]["defense"]}
                        </div>
                        Defense
                    </div>
                </div>
                {
                    children["types"].map((type:string) => (
                        <div className={s.labelWrap}>
                            <span className={s.label}>{type}</span>
                        </div>
                    ))
                }

            </div>
            <div className={s.pictureWrap}>
                <img src={children["img"]}  alt={children["name"]} />
            </div>
        </div>
    );
};

export default PokemonCard;