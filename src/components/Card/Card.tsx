import React from 'react';

import style from './card.module.scss';
import { CloudyIcon, RainIcon, ShtormIcon, SnowfallIcon, SunnyIcon } from '../Cicons/StatusIcons';

const Card: React.FC = () => {
	return (
		<article className={style.card}>
			<h1 className={style.city}>Barnaul</h1>
			<span className={style.date}>Tuesday, March 19, 2024</span>
			<div className={style.info}>
				<div className={style.status}>
					<RainIcon />
				</div>
				<div className={style.temp}>
					<span>5 C°</span>
				</div>
				<span className={style.desc}>Cloudy, no precipitation</span>
			</div>
		</article>
	);
};

export default Card;
