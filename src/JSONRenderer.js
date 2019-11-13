import React from 'react';
import { withTheme } from './theme-context';

class JSONRenderer extends React.Component {
	render () {
		let JSONString;

		switch (typeof this.props.JSONString) {
			case 'string':
				JSONString = this.props.JSONString;
				break;

			default:
				JSONString = JSON.stringify(this.props.JSONString, null, 2);
				break;
		}

		return (
			<pre className={`card bg-${this.props.theme}`}>
				<div className="card-body">
					{ JSONString }
				</div>
			</pre>
		)
	}
}

JSONRenderer.defaultProps = {
	theme: 'light'
}

const WithThemeJSONRenderer = withTheme(JSONRenderer);

export { WithThemeJSONRenderer as JSONRenderer };

export default JSONRenderer;
