import React, { Suspense, useState, useEffect, useRef } from 'react';
import PokemonService from './service-pokemon';
import Button from './Button';
import Alert from './Alert';
import ActionsToolbar from './ActionsToolbar';
import { JSONRenderer } from './JSONRenderer';

const MediaObject = React.lazy(() => import('./MediaObject'));
const JSONRendererPortal = React.lazy(() => import('./JSONRendererPortal'));

function DataFetcher () {
	const cancelButton = useRef(null);

	const [ isLoading, setIsLoading ] = useState(false);
	const [ _pokemonName, _setPokemonName ] = useState('ditto');
	const [ pokemonName, setPokemonName ] = useState(_pokemonName);
	const [ item, setItem ] = useState(null);
	const [ message, setMessage ] = useState(null);

	const executeRequest = () => {
		if(isLoading) return;

		setIsLoading(true);

		PokemonService.getPokemonByName(pokemonName)
		.then(result => {
			setIsLoading(false);

			setItem({
				name: result.data.name,
				img: result.data.sprites.front_default
			});

			setMessage({
				type: 'success',
				text: 'Got one. 806 to go.'
			});
		})
		.catch(error => {
			setIsLoading(false);
			setItem(null);
			setMessage({
				type: 'danger',
				text: error.message || error
			});
		});
	}

	const cancelRequest = () => {
		PokemonService.cancelRequest();
	}

	const handleChange = (e) => {
		_setPokemonName(e.target.value.toLowerCase());
	}

	const hadleSubmit = () => {
		setPokemonName(_pokemonName);
	}

	useEffect(() => {
		executeRequest();

		return () => {
			cancelRequest();
		}
	}, [ pokemonName ]);

	useEffect(() => {
		if(isLoading) cancelButton.current.focus();
	}, [ isLoading ]);

	return (
		<>
			<h1>Get Your First Pokemon</h1>

			{message && (
				<Alert type={message.type}>
					<p>{message.text}</p>
				</Alert>
			)}

			{item && (
				<Suspense fallback={<div>Loading...</div>}>
					<MediaObject
						name={item.name}
						img={item.img} />
				</Suspense>
			)}

			<ActionsToolbar>
				<input
					className="form-control"
					placeholder="Get More"
					type="text"
					defaultValue={pokemonName}
					onChange={handleChange} />

				<Button
					disabled={isLoading}
					clickHundler={hadleSubmit}>Catch</Button>

				<Button 
					disabled={!isLoading} 
					variant='danger'
					clickHundler={cancelRequest} 
					ref={cancelButton}>Cacel</Button>
			</ActionsToolbar>

			{item && (
				<Suspense fallback={<div>Loading...</div>}>
					<JSONRendererPortal>
						<JSONRenderer JSONString={item} />
					</JSONRendererPortal>
				</Suspense>
			)}
		</>
	);
}

export default DataFetcher;
