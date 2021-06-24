# RN Template

A template structure for react native using firebase, and react-sweet-state

To install:
```
yarn i
```

To run:
```
yarn react-native run-(system of choice)
```

Note: Follow the react native guide for loading up your project. This can vary between IOS' Xcode, and Androids Android Studio.

To access firebase, make sure to replace variables inside of firebase-config.js with your own database variables. Note: databaseURL **MUST** be included within the object, otherwise you will get a connection error. I typically will put in an empty string.

Currently, the auth context is not setup on this as writing. Routes.js is controlled with a boolean user. Hook this up with context to get it all working post login!