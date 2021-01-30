import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { Text, View } from "../../components/Themed";
import { Grid, StackedBarChart, XAxis, YAxis } from 'react-native-svg-charts';
import moment from 'moment';

import layout from '../../constants/Layout';
import { ColorName, Scores } from '../../screens/TabOneScreen';

type BarGraphProps = {
  data: Scores[];
  caption: string;
};

const graphWidth = layout.window.width - 20;
const graphHeight = 325;
const xAxisHeight = 30;
const yAxisHeight = 325;

export function BarGraph({ data, caption }: BarGraphProps) {
  const days = data.map(({ date }) => moment(date).format('ddd'));
  const dateNums = data.map(({ date }) => moment(date).format('D'));

  const generateXAxisValues = (idx: number): string => {
    return `${days[idx]} ${dateNums[idx]}`;
  };

  const keys: readonly ('teamA' | 'teamB')[] = ['teamA', 'teamB'];
  const colors: ColorName[] = ['cornflowerblue', 'fuchsia'];

  const axesSvg = { fontSize: 10, fill: 'grey' };

  return (
    <View style={styles.container}>
      <YAxis
        data={data}
        numberOfTicks={10}
        contentInset={{ top: 60, bottom: 20 }}
        style={{ marginBottom: xAxisHeight, marginLeft: 10 }}
        svg={{ fontSize: 10, fill: 'grey' }}
        min={0}
        max={10}
      />
      <View style={styles.chart}>
        <Text style={styles.caption}>{caption}</Text>
        <StackedBarChart
          style={{ height: graphHeight, flex: 1 }}
          keys={keys}
          data={data}
          colors={colors}
          contentInset={{ top: 20, bottom: 12 }}
        >
          <Grid />
        </StackedBarChart>
        <XAxis
          data={data}
          style={{ height: xAxisHeight }}
          svg={{ fontSize: 10, fill: 'grey' }}
          numberOfTicks={data.length}
          contentInset={{ left: 30, right: 30 }}
          formatLabel={generateXAxisValues}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  chart: {
    flex: 1,
    width: graphWidth,
    backgroundColor: 'transparent',
    marginLeft: 10,
    paddingVertical: 16,
    // flexDirection: "row",
    // height: graphHeight,
  },
  caption: {
    color: 'white', // use system styles / set default to dark
  },
});

export default BarGraph;
