import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { AuthStateContext, AuthDispatchContext } from '../Providers/AuthProvider';

import { DashboardScreen } from './screens/DashboardScreen';
const Stack = createStackNavigator();

const DashStack = () => {
	// const state = useContext(AuthStateContext);
	// const dispatch = useContext(AuthDispatchContext);
	return (
		<Stack.Navigator initialRouteName='Dashboard'>
			<Stack.Screen
				name='Dashboard'
				options={{
					// headerTitle: `Dashboard: ${state.user.firstName} ${state.user.lastName}`,
					headerTitle: 'Dashboard',
				}}
				component={DashboardScreen}
			/>
		</Stack.Navigator>
	);
};

export default DashStack;
