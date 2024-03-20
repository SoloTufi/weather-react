import React from 'react';

import style from './search.module.scss';

import SearchIcon from '../Cicons/SearchIcon';

const Search: React.FC = () => {
	const [searchValue, setSearchValue] = React.useState<string>('');
	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<form action='' className={style.form}>
			<input
				type='text'
				value={searchValue}
				onChange={onChangeInput}
				className={style.input}
			/>
			<button type='submit' className={style.btnSearch}>
				<SearchIcon />
			</button>
		</form>
	);
};

export default Search;
