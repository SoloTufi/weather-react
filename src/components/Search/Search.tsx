import style from './search.module.scss';

import SearchIcon from '../cicons/SearchIcon';

const Search = () => {
	return (
		<form action='' className={style.form}>
			<input type='text' className={style.input} />
			<button type='submit' className={style.btnSearch}>
				<SearchIcon />
			</button>
		</form>
	);
};

export default Search;
