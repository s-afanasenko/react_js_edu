import React, { useState } from 'react';
import Theme from './theme-context';
import Button from './Button';
import ActionsToolbar from './ActionsToolbar';

const themes = [ 'light', 'primary', 'secondary' ];

function AppWrapper(props) {
	const [ theme, setTheme ] = useState('light');

	const handlClick = (value) => {
		setTheme(value);
	}

	return (
		<Theme.Provider value={theme}>
			<div className="app-wrapper">
				<div className="container my-4">
					<div className="row justify-content-center">
						<div className="col-6">
							{props.children}

							<div id="JSON-renderer-portal"></div>
							
							<ActionsToolbar>
								{themes.map((_theme, index) => (
									<Button
										variant={_theme} 
										key={index} 
										disabled={_theme == theme}
										clickHundler={() => handlClick(_theme)}>{_theme}</Button>
								))}
							</ActionsToolbar>
						</div>
					</div>
				</div>
			</div>
		</Theme.Provider>
	);
}

export default AppWrapper;
