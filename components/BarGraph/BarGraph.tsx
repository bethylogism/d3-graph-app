import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts';

import layout from '../../constants/Layout';

type AxesProps = {
  width: number;
  height: number;
};

type Rating = {
  rating: number;
  column: number;
};

type BarGraphProps = {
  data: Rating[];
  color: string;
};

export function BarGraph({ data, color }: BarGraphProps) {
  let graphWidth = layout.window.width - 10;
  const xAxisHeight = 30;
  const yAxisHeight = 325;
  console.log('HELLO');

  const keys: readonly ('rating' | 'column')[] = ['rating', 'column'];
  const colors = ['cornflowerblue', 'fuchsia'];

  return (
    <View style={styles.main}>
      <StackedBarChart keys={keys} data={data} colors={colors} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 25,
    marginHorizontal: 0,
  },
});

export default BarGraph;
