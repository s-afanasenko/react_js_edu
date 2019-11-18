import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import ActionsToolbar from './ActionsToolbar';

import { themesConstants } from './store/constants/';
import { themeChanged } from './store/actions/';

const themes = Object.keys(themesConstants).map(themeKey => themesConstants[themeKey]);

class ThemeSwitcher extends React.Component {
	handlClick = value => {
		this.props.themeChanged(value);
	}

	render () {
		const { theme } = this.props.theme;

		return (
			<ActionsToolbar>
				{themes.map((_theme, index) => (
					<Button
						variant={_theme} 
						key={index} 
						disabled={_theme == theme}
						clickHundler={() => this.handlClick(_theme)}>{_theme}</Button>
				))}
			</ActionsToolbar>
		);
	}
}

function mapStateToProps(state) {
	return {
		theme: state.theme
	}
}

const mapDispatchToProps = {
	themeChanged
}

const ConnectedThemeSwitcher = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);

export { ConnectedThemeSwitcher as ThemeSwitcher };

export default ThemeSwitcher;
