import React from 'react';
import { connect } from 'react-redux';

class JSONRenderer extends React.Component {
	render () {
		let JSONString;
		const { theme } = this.props;

		switch (typeof this.props.JSONString) {
			case 'string':
				JSONString = this.props.JSONString;
				break;

			default:
				JSONString = JSON.stringify(this.props.JSONString, null, 2);
				break;
		}

		return (
			<pre className={`card bg-${theme}`}>
				<div className="card-body">
					{ JSONString }
				</div>
			</pre>
		)
	}
}

function mapStateToProps(state) {
	return {
		theme: state.theme.theme
	}
}

const ConnectedJSONRenderer = connect(mapStateToProps)(JSONRenderer);

export { ConnectedJSONRenderer as JSONRenderer };

export default JSONRenderer;
