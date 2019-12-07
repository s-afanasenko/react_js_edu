import React from "react";

const Theme = React.createContext();

const withTheme = function (Component) {
    return class ThemeWrapper extends React.Component {
        render () {
            return (
                <Theme.Consumer>
                    {(value) => (
                        <Component theme={value} {...this.props} />
                    )}
                </Theme.Consumer>
            );
        }
    };
};

export { withTheme };

export default Theme;
