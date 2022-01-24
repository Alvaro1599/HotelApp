import { combineReducers } from 'redux';
export const apiReducer = (state = { client: [] }, action) => {
	switch (action.type) {
		case 'GET_CLIENT':
			return {
				...state,
				client: action.payload
			};
		case 'UPDATE_CLIENT':
			return {
				...state,
				client: action.payload
			};
		case 'DELETE_CLIENT':
			return {
				...state,
				client: action.payload
			};
		case 'CREATE_CLIENT':
			return {
				...state,
				client: action.payload
			};
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	apiReducer: apiReducer
});
