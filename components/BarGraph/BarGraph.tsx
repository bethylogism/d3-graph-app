import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ART from '@react-native-community/art';

import { scaleBand } from 'd3-scale';
import moment from 'moment';

const { Surface, Group, Text, Shape } = ART;
import layout from '../../constants/Layout';

const generateValues = () => {
  let days: string[] = [];
  Array(7)
    .fill()
    .map((el, i) => days.push(moment().subtract(i, 'days').format('ddd')));

  console.log(days);
  let days2 = Array(7)
    .fill()
    .map((el, i) => (el = moment().subtract(i, 'days').format('ddd')));

  console.log(days2);
};

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

let graphWidth = layout.window.width - 10;

export function BarGraph({ data, color }: BarGraphProps) {
  console.log('HELLO');
  generateValues();
  return (
    <View style={styles.main}>
      <YAxis height={325} width={graphWidth} />
      <Columns data={data} width={graphWidth} height={315} color={color} />
      <XAxis height={30} width={graphWidth} />
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
