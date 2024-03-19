import Card from './components/Card/Card';
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
				<Card />
			</div>
		</div>
	);
}

export default App;
