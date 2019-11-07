import axios, { CancelToken } from 'axios';

let cancelCall;

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

function getPokemonByName(pokemonName) {
	if(!pokemonName) {
		return Promise.reject('Name is required.');
	}

	return axios.get(`pokemon/${pokemonName}/`, {
		cancelToken: new CancelToken(c => {
	    	cancelCall = c;
	  	})
	});
}

function cancelRequest(cancelMessage = 'Request was canceled.') {
	cancelCall(cancelMessage);
}

export default {
	getPokemonByName,
	cancelRequest
}
