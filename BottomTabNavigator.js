import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
const BottomTabNavigator = createBottomTabNavigator();

import DashStack from './src/DashStack/DashStack';
import SettingStack from './src/SettingStack/SettingStack';
import ProfileStack from './src/ProfileStack/ProfileStack';

const MainStackWithBottomTabs = () => {
	return (
		<BottomTabNavigator.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: () => {
					if (route.name === 'Profile') {
						return <FontAwesomeIcon icon={faUser} size={26} color={'#fff'} />;
					} else if (route.name === 'Dashboard') {
						return <FontAwesomeIcon icon={faHome} size={26} color={'#fff'} />;
					} else if (route.name === 'Settings') {
						return <FontAwesomeIcon icon={faCog} size={26} color={'#fff'} />;
					}
				},
			})}
			tabBarOptions={{
				activeTintColor: '#fff',
				inactiveTintColor: '#fff',
				activeBackgroundColor: '#7babbf',
				inactiveBackgroundColor: '#9acee3',
			}}
		>
			<BottomTabNavigator.Screen name='Dashboard' component={DashStack} />
			<BottomTabNavigator.Screen name='Settings' component={SettingStack} />
			<BottomTabNavigator.Screen name='Profile' component={ProfileStack} />
		</BottomTabNavigator.Navigator>
	);
};

export default MainStackWithBottomTabs;
