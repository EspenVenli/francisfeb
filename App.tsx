import {Text, View, LogBox} from 'react-native';
import RootNavigator from './src/routes';

import firebase from '@react-native-firebase/app';
import {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// if (!firebase?.apps?.length) {
//   firebase.initializeApp({
//     apiKey: "AIzaSyCek_AXmEOvOVk49e_l3qzeA4OBNUV1qFE",
//     authDomain: "",
//     projectId: "venli-1761f",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "1:1075400544877:ios:6bab061383c369a3c06564",
//     databaseURL:""
//   });
// }
LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

GoogleSignin.configure({
  webClientId:
    "1075400544877-b1seftrgekc73ke6qet1m4blf08sm38v.apps.googleusercontent.com",
    
})


// firebase.initializeApp(firebaseConfig);

const App = () => {


  return(
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;
