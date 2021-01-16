import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../components/Themed';
import BarGraph from '../components/BarGraph/BarGraph';

type Rating = {
  rating: number;
  column: number;
};

const generateValues = () => {
  const days = Array(7)
    .fill()
    .map((el, i) => (el = moment().subtract(i, 'days').format('ddd')));

  console.log(days);
  return days;
};

const data = [
  { rating: 1, column: 1 },
  { rating: 9, column: 2 },
];

export default function TabOneScreen() {
  return (
    <LinearGradient
      colors={['#282828', '#121212']}
      style={styles.linearGradient}
    >
      <Text style={styles.title}>This is too easy?</Text>
      <View>
        <Text>Hello</Text>
        <BarGraph data={data} color="red" />
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
