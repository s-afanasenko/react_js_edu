import axios, { CancelToken } from "axios";
import MockAdapter from "axios-mock-adapter";

let cancelCall;

const noNameMessage = "Name is required.";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

function getPokemonByName (pokemonName) {
    if (!pokemonName) {
        return Promise.reject(noNameMessage);
    }

    const mock = new MockAdapter(axios);

    mock.onGet("pokemon/some-name/").reply(200, { name: "some-name" });
    mock.onGet("pokemon/some-other-name/").reply(404);

    return axios.get(`pokemon/${pokemonName}/`, {
        cancelToken: new CancelToken(c => {
            cancelCall = c;
        })
    });
}

function cancelRequest (cancelMessage = "Request was canceled.") {
    cancelCall(cancelMessage);
}

export default {
    getPokemonByName,
    cancelRequest,
    noNameMessage
};
