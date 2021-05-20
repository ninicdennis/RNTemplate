import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignUpScreen } from './screens/SignUpScreen';
import { LoginScreen } from './screens/LoginScreen';

const Stack = createStackNavigator();
export const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => null,
			}}
			initialRouteName='Signup'
		>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Signup' component={SignUpScreen} />
		</Stack.Navigator>
	);
};
