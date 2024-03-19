import CloudyIcon from './components/cicons/CloudyIcon';
import SearchIcon from './components/cicons/SearchIcon';
import style from './scss/App.module.scss';

function App() {
	return (
		<div className={style.root}>
			<div className={style.container}>
				<form action='' className={style.form}>
					<input type='text' className={style.input} />
					<button type='submit' className={style.btnSearch}>
						<SearchIcon />
					</button>
				</form>
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
			</div>
		</div>
	);
}

export default App;
