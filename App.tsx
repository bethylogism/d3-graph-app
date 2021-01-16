// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import TopBar from './components/TopBar';
import Navigation from './navigation';

const data = [
  { rating: 4, column: 0 },
  { rating: 7, column: 1 },
  { rating: 6, column: 2 },
  { rating: 7, column: 3 },
  { rating: 8, column: 4 },
  { rating: 5, column: 5 },
  { rating: 8, column: 6 },
];

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TopBar />
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
