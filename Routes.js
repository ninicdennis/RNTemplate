import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/AuthStack/AuthStack';
import MainStackWithBottomTabs from './BottomTabNavigator';
export const Routes = () => {
	const user = false;
	return <NavigationContainer>{user ? <MainStackWithBottomTabs /> : <AuthStack />}</NavigationContainer>;
};
