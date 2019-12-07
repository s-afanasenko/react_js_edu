import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import ActionsToolbar from "./ActionsToolbar";
import PropTypes from "prop-types";
import { themesConstants } from "./store/constants/";
import { themeChanged } from "./store/actions/";

const themes = Object.keys(themesConstants).map(themeKey => themesConstants[themeKey]);

class ThemeSwitcher extends React.Component {
    handlClick = value => {
        this.props.themeChanged(value);
    }

    render () {
        const { theme } = this.props;

        return (
            <ActionsToolbar>
                {themes.map((_theme, index) => (
                    <Button
                        variant={_theme}
                        key={index}
                        disabled={_theme === theme}
                        clickHundler={() => this.handlClick(_theme)}>{_theme}</Button>
                ))}
            </ActionsToolbar>
        );
    }
}

ThemeSwitcher.propTypes = {
    themeChanged: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
};

function mapStateToProps (state) {
    return {
        theme: state.theme.theme
    };
}

const mapDispatchToProps = {
    themeChanged
};

const ConnectedThemeSwitcher = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);

export { ConnectedThemeSwitcher as ThemeSwitcher };

export default ThemeSwitcher;
