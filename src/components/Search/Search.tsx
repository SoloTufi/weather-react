import React from 'react';

import style from './search.module.scss';

import SearchIcon from '../Cicons/SearchIcon';

const Search: React.FC<{ onSearch: (city: string) => void }> = ({ onSearch }) => {
	const [searchValue, setSearchValue] = React.useState<string>('');
	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(searchValue);
	};

	return (
		<form className={style.form} onSubmit={handleSubmit}>
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
