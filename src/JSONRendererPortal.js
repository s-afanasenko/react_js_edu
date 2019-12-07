import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class JSONRendererPortal extends React.Component {
    render () {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById("JSON-renderer-portal")
        );
    }
}

JSONRendererPortal.propTypes = {
    children: PropTypes.node.isRequired
};

export default JSONRendererPortal;
