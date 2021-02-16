import * as React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../components/Themed';
import BarGraph from '../components/BarGraph/BarGraph';
import { ScrollView } from 'react-native-gesture-handler';
import TopBar from '../components/TopBar';
// what's the difference between this scrollview and react-natiev scrollview?

export type Scores = {
  id: string;
  date: string;
  teamA: number;
  teamB: number;
};

const data: Scores[] = [
  { id: '123999', date: '2021-01-08', teamA: 4, teamB: 1 },
  { id: '123888', date: '2021-01-09', teamA: 6, teamB: 2 },
  { id: '123777', date: '2021-01-10', teamA: 6, teamB: 3 },
  { id: '123666', date: '2021-01-11', teamA: 7, teamB: 4 },
  { id: '123555', date: '2021-01-12', teamA: 8, teamB: 5 },
  { id: '123444', date: '2021-01-13', teamA: 5, teamB: 1 },
  { id: '123333', date: '2021-01-14', teamA: 0, teamB: 0 },
];
const data2: Scores[] = [
  { id: '123222', date: '2021-01-01', teamA: 1, teamB: 3 },
  { id: '123111', date: '2021-01-02', teamA: 3, teamB: 4 },
  { id: '123000', date: '2021-01-03', teamA: 2, teamB: 5 },
  { id: '122999', date: '2021-01-04', teamA: 1, teamB: 4 },
  { id: '122888', date: '2021-01-05', teamA: 2, teamB: 2 },
  { id: '122777', date: '2021-01-06', teamA: 1, teamB: 7 },
  { id: '122666', date: '2021-01-07', teamA: 2, teamB: 8 },
];

export type ColorName =
  | 'cornflowerblue'
  | 'fuchsia'
  | 'ultramarine'
  | 'mauve'
  | 'copper'
  | 'amethyst';

type TeamKeys = keyof Omit<Scores, 'date' | 'id'>;

export type ColorKey = {
  [key in TeamKeys]: ColorName;
};

const teamColors: ColorKey = {
  teamA: 'cornflowerblue',
  teamB: 'fuchsia',
};

export type TeamNames = {
  [key in TeamKeys]: string;
};

const teamNames: TeamNames = {
  teamA: 'The A Team',
  teamB: 'B*Team',
};

export default function TabOneScreen() {
  return (
    <ScrollView style={{ backgroundColor: 'transparent' }}>
      <TopBar names={teamNames} colors={teamColors} />
      <LinearGradient key="week1" colors={['#282828', '#121212']}>
        <BarGraph data={data} caption="This week" />
      </LinearGradient>
      <LinearGradient key="week2" colors={['#282828', '#121212']}>
        <BarGraph data={data2} caption="Previous week" />
      </LinearGradient>
    </ScrollView>
  );
}

// Alternative data structure

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
