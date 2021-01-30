// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import TopBar from './components/TopBar';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();
  const colorScheme = 'dark';

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <TopBar /> */}
        <Navigation colorScheme={colorScheme} />
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#121212"
          translucent={true}
          networkActivityIndicatorVisible={true}
        />
      </SafeAreaProvider>
    );
  }
}
