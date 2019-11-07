import React from 'react';

class Alert extends React.Component {
	render () {
		const { children, type } = this.props;

		return (
			<div className={`alert alert-${type}`}>
				{children}
			</div>
		)
	}
}

Alert.defaultProps = {
	type: 'primary'
}

export default Alert;
