import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SignUpScreen = ({ navigation }) => {
	const [user, setUser] = useState('');
	const [pw, setPw] = useState('');
	const [err, setErr] = useState('');

	const signUp = () => {
		setErr('');
		auth()
			.createUserWithEmailAndPassword(user, pw)
			.then(() => {
				console.log('User account created & signed in!');
			})
			.catch(error => {
				if (error.code === 'auth/email-already-in-use') {
					setErr('Email address already in use.');
					console.log('That email address is already in use!');
				}

				if (error.code === 'auth/invalid-email') {
					setErr('Invalid Email');
					console.log('That email address is invalid!');
				}

				console.error(error);
			});
	};

	useEffect(() => {
		console.log(user, pw);
	}, [user, pw]);
	return (
		<View>
			<Text>{err && <Text>{err}</Text>}</Text>
			<Text>Sign Up:</Text>
			<Text>Username:</Text>
			<TextInput value={user} onChangeText={t => setUser(t)} />
			<Text>Password:</Text>
			<TextInput value={pw} onChangeText={t => setPw(t)} />
			<TouchableOpacity onPress={signUp}>
				<Text>Sign up</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text>Login instead</Text>
			</TouchableOpacity>
		</View>
	);
};
