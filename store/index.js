// state
export const state = () => ( {
	themeType: "dark"
} ); // actions
export const actions = {
	upDate ( { commit }, payload ) {
		commit( "setThemeType", payload );
	}
}; // mutations
export const mutations = {
	setThemeType ( state, payload ) {
		const { themeType } = payload;
		state.themeType = themeType;
		if ( window ) {
			window.document.documentElement.setAttribute( "data-theme", themeType );
		}
	}
}; // getters
export const getters = {
	getThemeType ( state ) {
		return state.themeType;
	}
};
