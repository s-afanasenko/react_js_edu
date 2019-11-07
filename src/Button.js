import React from 'react';

class Button extends React.Component {
	render() {
		const {
			children, 
			clickHundler, 
			disabled,
			variant,
			size
		} = this.props;

		return (
			<button 
				className={`btn btn-${variant} btn-${size}`}
				onClick={clickHundler} 
				disabled={disabled}>
				{children}
			</button>			
		);
	}
}

Button.defaultProps = {
	variant: 'primary'
}

export default Button;
