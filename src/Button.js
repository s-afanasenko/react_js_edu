import React from "react";
import PropTypes from "prop-types";

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

Button.displayName = "Button";

Button.defaultProps = {
    clickHundler: () => {},
    disabled: false,
    variant: "primary",
    size: ""
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    clickHundler: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.string,
    size: PropTypes.string
};

export default Button;
