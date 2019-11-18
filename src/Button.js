import React from 'react';

const Button = React.forwardRef((props, ref) => {
	const {
		children, 
		clickHundler, 
		disabled,
		variant,
		size
	} = props;

	return (
		<button 
			className={`btn btn-${variant} btn-${size}`}
			onClick={clickHundler} 
			disabled={disabled}
			ref={ref}>
			{children}
		</button>			
	);
});

Button.defaultProps = {
	variant: 'primary'
}

export default Button;
