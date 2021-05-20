import React, { useEffect } from 'react';
import { Routes } from './Routes';
import firebase from '@react-native-firebase/app';
import { firebaseConfig } from './firebase-config';

const App = () => {
	useEffect(() => {
		if (!firebase.apps.length) {
			const fb = firebase.initializeApp(firebaseConfig);
			fb;
		} else {
			const fb = firebase.app(); // if already initialized, use that one
			fb;
		}
	}, []);
	return <Routes />;
};

export default App;
