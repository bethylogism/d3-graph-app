import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../components/Themed';
import BarGraph from '../components/BarGraph/BarGraph';
import { ScrollView } from 'react-native-gesture-handler';
import { icon } from '@fortawesome/fontawesome-svg-core';
import TopBar from '../components/TopBar';
// what's the difference between this scrollview and react-natiev scrollview?

export type Scores = {
  date: string;
  teamA: number;
  teamB: number;
};

const data: Scores[] = [
  { date: '2021-01-08', teamA: 4, teamB: 1 },
  { date: '2021-01-09', teamA: 6, teamB: 2 },
  { date: '2021-01-10', teamA: 6, teamB: 3 },
  { date: '2021-01-11', teamA: 7, teamB: 4 },
  { date: '2021-01-12', teamA: 8, teamB: 5 },
  { date: '2021-01-13', teamA: 5, teamB: 1 },
  { date: '2021-01-14', teamA: 0, teamB: 0 },
];
const data2: Scores[] = [
  { date: '2021-01-01', teamA: 1, teamB: 3 },
  { date: '2021-01-02', teamA: 3, teamB: 4 },
  { date: '2021-01-03', teamA: 2, teamB: 5 },
  { date: '2021-01-04', teamA: 1, teamB: 4 },
  { date: '2021-01-05', teamA: 2, teamB: 2 },
  { date: '2021-01-06', teamA: 1, teamB: 7 },
  { date: '2021-01-07', teamA: 2, teamB: 8 },
];

export type ColorName =
  | 'cornflowerblue'
  | 'fuchsia'
  | 'ultramarine'
  | 'mauve'
  | 'copper'
  | 'amethyst';

export type ColorKey = {
  [key in TeamKeys]: ColorName;
};

const teamColors: ColorKey = {
  teamA: 'cornflowerblue',
  teamB: 'fuchsia',
};

type TeamKeys = keyof Omit<Scores, 'date'>;

export type TeamNames = {
  [key in TeamKeys]: string;
};

const teamNames: TeamNames = {
  teamA: 'The A Team',
  teamB: 'B*Team',
};

// const colorKeys = [
//   {
//     teamA: {
//       name: 'The A Team',
//       color: 'cornflowerblue',
//     },
//     teamB: {
//       name: 'B*Team',
//       color: 'fuchsia',
//     },
//   },
// ];

export default function TabOneScreen() {
  return (
    <LinearGradient colors={['#282828', '#121212']}>
      <TopBar names={teamNames} colors={teamColors} />
      <ScrollView style={{ backgroundColor: 'transparent' }}>
        <LinearGradient colors={['#282828', '#121212']}>
          <BarGraph data={data} caption="This week" />
          {/* <BarGraph data={data2} caption="Previous week" /> */}
        </LinearGradient>
        <LinearGradient colors={['#282828', '#121212']}>
          {/* <Text style={styles.title}>All team stats</Text> */}
          {/* <BarGraph data={data} caption="This week" /> */}
          <BarGraph data={data2} caption="Previous week" />
        </LinearGradient>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white', // TODO: use theme color
    fontSize: 20,
    fontWeight: 'bold',
  },
});
