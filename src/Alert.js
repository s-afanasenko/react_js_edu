import React from "react";
import PropTypes from "prop-types";

class Alert extends React.Component {
    render () {
        const { children, type } = this.props;

        return (
            <div className={`alert alert-${type}`}>
                {children}
            </div>
        );
    }
}

Alert.defaultProps = {
    type: "primary"
};

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string
};

export default Alert;
