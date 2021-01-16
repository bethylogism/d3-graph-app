import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../components/Themed';
import BarGraph from '../components/BarGraph/BarGraph';

export default function TabOneScreen() {
  return (
    <LinearGradient
      colors={['#282828', '#121212']}
      style={styles.linearGradient}
    >
      <Text style={styles.title}>This is too easy?</Text>
      <View>
        <Text>Hello</Text>
        <BarGraph />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
