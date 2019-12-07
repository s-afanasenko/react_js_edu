import React from "react";
import PropTypes from "prop-types";

class ActionsToolbar extends React.Component {
    render () {
        const children = React.Children.map(this.props.children, child => <li className="list-inline-item">{child}</li>);

        return (
            <ul className="list-inline">{children}</ul>
        );
    }
}

ActionsToolbar.propTypes = {
    children: PropTypes.node.isRequired
};

export default ActionsToolbar;
