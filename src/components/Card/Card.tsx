import React from 'react';

import { IProps } from './types';
import { CloudyIcon, RainIcon, ShtormIcon, SnowfallIcon, SunnyIcon } from '../Cicons/StatusIcons';

import style from './card.module.scss';

const Card: React.FC<IProps> = ({ id, city, date, status, temp, desc }: IProps) => {
	return (
		<article className={style.card}>
			<h1 className={style.city}>{city}</h1>
			<span className={style.date}>{date}</span>
			<div className={style.info}>
				<div className={style.status}>
					<RainIcon />
				</div>
				<div className={style.temp}>
					<span>{temp} C°</span>
				</div>
				<span className={style.desc}>{desc}</span>
			</div>
		</article>
	);
};

export default Card;
