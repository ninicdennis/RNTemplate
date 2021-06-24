import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
	// value of the store on initialisation
	initialState: {
		user: false,
	},
	// actions that trigger store mutation
	actions: {
		login:
			() =>
			({ getState, setState }) => {
				setState({
					user: false,
				});
			},
	},
	// optional, mostly used for easy debugging
	name: 'auth',
});

export const useAuth = createHook(Store);
