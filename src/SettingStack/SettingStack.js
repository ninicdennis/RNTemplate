import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { AuthStateContext, AuthDispatchContext } from '../Providers/AuthProvider';

import { SettingScreen } from './screens/SettingScreen';
const Stack = createStackNavigator();

const SettingStack = () => {
	// const state = useContext(AuthStateContext);
	// const dispatch = useContext(AuthDispatchContext);
	return (
		<Stack.Navigator initialRouteName='Dashboard'>
			<Stack.Screen
				name='Settings'
				options={{
					// headerTitle: `Dashboard: ${state.user.firstName} ${state.user.lastName}`,
					headerTitle: 'Settings',
				}}
				component={SettingScreen}
			/>
		</Stack.Navigator>
	);
};

export default SettingStack;
