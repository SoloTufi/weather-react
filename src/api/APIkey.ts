import axios from 'axios';

export const getData = async () => {
	try {
		const { data } = await axios.get('https://13750409e33c9254.mokky.dev/items');
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log(error, 'error');
			console.log(error.response?.data.errorText, 'Bad request');
		} else if (error instanceof Error) {
			console.log(error.message);
		}
	}
};
