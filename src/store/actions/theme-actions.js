import { themeActionsConstants } from '../constants/';

export const themeActions = {
	themeChanged	
}

export function themeChanged(theme) {
	return {
		type: themeActionsConstants.THEME_CHANGED,
		payload: theme
	}
}
