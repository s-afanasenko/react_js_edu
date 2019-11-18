import { themeActionsConstants, themesConstants } from '../constants/';

export const themeInitialState = {
	theme: themesConstants.LIGHT
}

export function themeReducer(state = themeInitialState, action) {
	switch (action.type) {
		case themeActionsConstants.THEME_CHANGED:
			return {
				...state,
				theme: action.payload
			};
		default:
			return state;
	}
}
