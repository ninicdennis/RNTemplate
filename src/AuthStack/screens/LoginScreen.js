import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const LoginScreen = ({ navigation }) => {
	const [user, setUser] = useState('');
	const [pw, setPw] = useState('');
	const [err, setErr] = useState('');

	const login = () => {
		setErr('');
		auth()
			.signInWithEmailAndPassword(user, pw)
			.then(res => {
				console.log(res); // should be user info.
			})
			.catch(error => {
				if (error.code === 'auth/invalid-email') {
					setErr('Invalid Email');
				}
				if (error.code === 'auth/user-not-found') {
					setErr('Wrong email or password.');
				}
				if (error) {
					setErr('Something went wrong. Please try again.');
				}
				console.log(error.code); // error.code should have some idea of what the wrong login is.
			});
	};

	useEffect(() => {
		console.log(user, pw);
	}, [user, pw]);
	return (
		<View>
			<Text>{err && <Text>{err}</Text>}</Text>
			<Text>Login:</Text>
			<Text>Username:</Text>
			<TextInput value={user} onChangeText={t => setUser(t)} />
			<Text>Password:</Text>
			<TextInput value={pw} onChangeText={t => setPw(t)} />
			<TouchableOpacity onPress={login}>
				<Text>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
				<Text>Sign up instead</Text>
			</TouchableOpacity>
		</View>
	);
};
