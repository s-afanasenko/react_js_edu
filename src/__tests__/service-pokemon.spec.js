import PokemonService from '../service-pokemon.mock';

describe('service-pokemon', () => {
	it('should reject with no name message if no name provided', async () => {
		expect.assertions(1);
		await expect(PokemonService.getPokemonByName())
			.rejects.toBe(PokemonService.noNameMessage);
	});

	it('should reject if non-existatnt name provided', async () => {
		expect.assertions(1);
		await PokemonService.getPokemonByName('some-other-name')
			.catch(e => {
				expect(e.message).toBe("Request failed with status code 404");
			});
	});

	it('should resolve with object if existant name provided', async () => {
		expect.assertions(1);
		await PokemonService.getPokemonByName('some-name')
			.then(result => {
				expect(result.data.name).toBe('some-name');
			});
	});

	it('should resolve with expected name', async () => {
		expect.assertions(1);
		await PokemonService.getPokemonByName('some-name')
			.then(result => {
				expect(result.data.name).toBe('some-name');
			});
	});
});
