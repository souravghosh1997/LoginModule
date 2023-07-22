import * as React from 'react';
import * as firebase from 'firebase';
import { Navigation } from './src/infrastructure/navigation/Index';
import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
const firebaseConfig = {
  apiKey: 'AIzaSyB4gIOWmCoLVFgmd5wa07rsU7zBSKXvWjU',
  authDomain: 'mealstogo-d1511.firebaseapp.com',
  projectId: 'mealstogo-d1511',
  storageBucket: 'mealstogo-d1511.appspot.com',
  messagingSenderId: '719628156900',
  appId: '1:719628156900:web:c167ef1683cac73721d1f1',
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
