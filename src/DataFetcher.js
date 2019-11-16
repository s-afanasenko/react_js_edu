import React, { Suspense, useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { executeRequest, cancelRequest } from './store/actions/';
import Button from './Button';
import Alert from './Alert';
import ActionsToolbar from './ActionsToolbar';
import { JSONRenderer } from './JSONRenderer';

const MediaObject = React.lazy(() => import('./MediaObject'));
const JSONRendererPortal = React.lazy(() => import('./JSONRendererPortal'));

function DataFetcher () {
	const cancelButton = useRef(null);
	const [ pokemonName, setPokemonName ] = useState();
	const dispatch = useDispatch();
	const item = useSelector(state => state.data.item);
	const message = useSelector(state => state.data.message);
	const isLoading = useSelector(state => state.data.isLoading);

	const handleChange = (e) => {
		setPokemonName(e.target.value.toLowerCase());
	}

	const hadleSubmit = useCallback(
		() => dispatch(executeRequest(pokemonName)),
		[ dispatch, pokemonName ]
	)

	const cancelHandler = useCallback(
		() => dispatch(cancelRequest()),
		[ dispatch ]
	)

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
					clickHundler={cancelHandler} 
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
