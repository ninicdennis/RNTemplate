import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { AuthStateContext, AuthDispatchContext } from '../Providers/AuthProvider';

import { ProfileScreen } from './screens/ProfileScreen';
const Stack = createStackNavigator();

const ProfileStack = () => {
	// const state = useContext(AuthStateContext);
	// const dispatch = useContext(AuthDispatchContext);
	return (
		<Stack.Navigator initialRouteName='Dashboard'>
			<Stack.Screen
				name='Profile'
				options={{
					// headerTitle: `Dashboard: ${state.user.firstName} ${state.user.lastName}`,
					headerTitle: 'Profile',
				}}
				component={ProfileScreen}
			/>
		</Stack.Navigator>
	);
};

export default ProfileStack;
