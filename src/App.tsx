import Card from './components/Card/Card';
import Search from './components/Search/Search';
import style from './scss/App.module.scss';

function App() {
	return (
		<div className={style.root}>
			<div className={style.container}>
				<Search />
				<Card />
			</div>
		</div>
	);
}

export default App;
