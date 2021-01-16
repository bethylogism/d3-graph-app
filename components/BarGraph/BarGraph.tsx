import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Surface, Group, Text, Shape } from '@react-native-community/art';

import { scaleBand } from 'd3-scale';
import moment from 'moment';

import layout from '../../constants/Layout';

type AxesProps = {
  width: number;
  height: number;
};
function XAxis({ width, height }: AxesProps) {
  return <Surface width={width} height={height}></Surface>;
}

function YAxis({ width, height }: AxesProps) {
  return <Surface width={width} height={height}></Surface>;
}

function Columns({ width, height, data, color }: AxesProps & BarGraphProps) {
  return <Surface width={width} height={height}></Surface>;
}

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

  return (
    <View style={styles.main}>
      <YAxis height={yAxisHeight} width={graphWidth} />
      <Columns data={data} width={graphWidth} height={315} color={color} />
      <XAxis height={xAxisHeight} width={graphWidth} />
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
