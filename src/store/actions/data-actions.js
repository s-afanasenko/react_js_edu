import { dataActionsConstants } from '../constants/';
import PokemonService from '../../service-pokemon';

export function fetchStarted() {
	return {
		type: dataActionsConstants.FETCH_STARTED
	}
};

export function fetchSucceeded(item) {
	return {
		type: dataActionsConstants.FETCH_SUCCEEDED,
		payload: item
	}
};

export function fetchFaild(error) {
	return {
		type: dataActionsConstants.FETCH_FAILD,
		payload: error
	}
}

export function executeRequest(name) {
	return function(dispatch) {
		dispatch(fetchStarted());
		PokemonService.getPokemonByName(name)
		.then(result => {
			dispatch(fetchSucceeded({
				name: result.data.name,
				img: result.data.sprites.front_default
			}));
		})
		.catch(error => {
			dispatch(fetchFaild(error));
		});
	}
}

export function cancelRequest() {
	return function(dispatch) {
		PokemonService.cancelRequest();
	}
}
