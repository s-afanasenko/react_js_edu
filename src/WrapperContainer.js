import React from 'react';

class WrapperContainer extends React.Component {
	render () {
		return (
			<div className="container my-4">
				<div className="row justify-content-center">
					<div className="col-6">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default WrapperContainer;
