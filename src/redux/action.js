import axios from 'axios';

export const getClient = () => async (dispatch) => {
	try {
		const response = await axios.get('http://localhost:5000/api/v1/client');
		dispatch({
			type: 'GET_CLIENT',
			payload: response.data
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateClient = (data) => async (dispatch) => {
	try {
		await axios.put('http://localhost:5000/api/v1/client/' + data.clientId, data);
		const response = await axios.get('http://localhost:5000/api/v1/client');
		dispatch({
			type: 'UPDATE_CLIENT',
			payload: response.data
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteClient = (data) => async (dispatch) => {
	try {
		await axios.delete('http://localhost:5000/api/v1/client/' + data);
		const response = await axios.get('http://localhost:5000/api/v1/client');
		dispatch({
			type: 'DELETE_CLIENT',
			payload: response.data
		});
	} catch (error) {
		console.log(error);
	}
};

export const createClient = (data) => async (dispatch) => {
	try {
		await axios.post('http://localhost:5000/api/v1/client', data);
		const response = await axios.get('http://localhost:5000/api/v1/client');
		dispatch({
			type: 'CREATE_CLIENT',
			payload: response.data
		});
	} catch (error) {
		console.log(error);
	}
};
