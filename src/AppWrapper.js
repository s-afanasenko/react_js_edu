import React from 'react';
import { Provider } from 'react-redux'
import store from './store/';
import { ThemeSwitcher } from './ThemeSwitcher';

class AppWrapper extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<div className="app-wrapper">
					<div className="container my-4">
						<div className="row justify-content-center">
							<div className="col-6">
								{this.props.children}

								<div id="JSON-renderer-portal"></div>

								<ThemeSwitcher />
							</div>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default AppWrapper;
