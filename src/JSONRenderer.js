import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class JSONRenderer extends React.Component {
    render () {
        let JSONString;
        const { theme } = this.props;

        switch (typeof this.props.JSONString) {
        case "string":
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
        );
    }
}

JSONRenderer.propTypes = {
    theme: PropTypes.string,
    JSONString: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

JSONRenderer.defaultProps = {
    theme: "primary"
};

function mapStateToProps (state) {
    return {
        theme: state.theme.theme
    };
}

const ConnectedJSONRenderer = connect(mapStateToProps)(JSONRenderer);

export { ConnectedJSONRenderer as JSONRenderer };

export default JSONRenderer;
