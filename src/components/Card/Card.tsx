import CloudyIcon from '../cicons/CloudyIcon';
import style from './card.module.scss';

const Card = () => {
	return (
		<article className={style.card}>
			<h1 className={style.city}>Barnaul</h1>
			<span className={style.date}>Tuesday, March 19, 2024</span>
			<div className={style.info}>
				<div className={style.status}>
					<CloudyIcon />
				</div>
				<div className={style.temp}>
					<span>5 C°</span>
				</div>
			</div>
		</article>
	);
};

export default Card;
