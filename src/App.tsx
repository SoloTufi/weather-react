import React from 'react';

import axios from 'axios';

import { IProps } from './components/Card/types';
import Card from './components/Card/Card';
import Search from './components/Search/Search';

import style from './scss/App.module.scss';

function App() {
	const [items, setItems] = React.useState<IProps[]>([]);

	const getData = async (city: string) => {
		try {
			const { data } = await axios.get('https://13750409e33c9254.mokky.dev/items', {
				params: { city },
			});
			setItems(data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error, 'error');
				console.log(error.response?.data.errorText, 'Bad request');
			} else if (error instanceof Error) {
				console.log(error.message);
			}
		}
	};

	return (
		<div className={style.root}>
			<div className={style.container}>
				<Search onSearch={getData} />
				{items && items.length > 0 && <Card {...items[0]} />}
			</div>
		</div>
	);
}

export default App;
