import React from 'react';
import PokemonService from './service-pokemon';
import Button from './Button';
import Alert from './Alert';
import MediaObject from './MediaObject';
import ActionsToolbar from './ActionsToolbar';
import WrapperContainer from './WrapperContainer';

class DataFetcher extends React.Component {
	state = {
		isLoading: false,
		item: null,
		message: null
	}

	executeRequest = () => {
		if(this.state.isLoading) return;

		this.setState({ 
			isLoading: true,
			message: null
		});

		PokemonService.getPokemonByName('ditto')
		.then(result => {
			this.setState({ 
				isLoading: false,
				item: {
					name: result.data.name,
					img: result.data.sprites.front_default
				},
				message: {
					type: 'success',
					text: 'Got one. 806 to go.'
				}
			});
		})
		.catch(error => {
			this.setState({ 
				isLoading: false,
				item: null,
				message: {
					type: 'danger',
					text: error.message || error
				}
			});
		});
	}

	cancelRequest = () => {
		PokemonService.cancelRequest();
	}

	render() {
		const { isLoading, message, item } = this.state;

		return (
			<WrapperContainer>
				<h1>Get Youre First Pokemon</h1>

				{message && <Alert type={message.type}>
					<p>{message.text}</p>
					<Button 
						disabled={isLoading}
						clickHundler={this.executeRequest}>Try Again</Button>
				</Alert>}

				{item && <MediaObject
					name={item.name}
					img={item.img} />}

				<ActionsToolbar>
					<Button
						disabled={isLoading}
						clickHundler={this.executeRequest}>Catch</Button>

					<Button 
						disabled={!isLoading} 
						variant='danger'
						clickHundler={this.cancelRequest}>Cacel</Button>
				</ActionsToolbar>
			</WrapperContainer>
		);
	}
}

export default DataFetcher;
