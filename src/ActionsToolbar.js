import React from 'react';

class ActionsToolbar extends React.Component {
	render () {
		const children = React.Children.map(this.props.children, child => <li className="list-inline-item">{child}</li>);

		return (
			<ul className="list-inline">{children}</ul>
		);
	}
}

export default ActionsToolbar;
