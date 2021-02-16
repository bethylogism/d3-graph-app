import * as React from 'react';
import { ScrollView as OtherScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';

import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Line } from 'react-native-svg';
import moment from 'moment';

// put this in a useVM hook like
const bigdata = [
  1,
  4,
  3,
  2,
  3,
  6,
  4,
  5,
  6,
  7,
  4,
  8,
  7,
  9,
  11,
  9,
  11,
  14,
  13,
  17,
  20,
  16,
  20,
  21,
  9,
  20,
];

// rather than paginating, why not have it all on one giant graph but scroll left and right / back and forward?

type PaginatedData = number[][];
const scoresPerPage = 7;

function generatePaginatedScores(): PaginatedData {
  const paginatedData: PaginatedData = [];
  let currentStart = 0;
  for (let i = 0; i < Math.max(bigdata.length / scoresPerPage); i++) {
    let scores = bigdata.slice(currentStart, currentStart + scoresPerPage);
    paginatedData.push(scores);
    currentStart += scoresPerPage;
  }
  return paginatedData;
}

export default function TabTwoScreen() {
  const paginatedData = generatePaginatedScores();
  console.log(paginatedData);
  return (
    <LinearGradient colors={['#282828', '#121212']} style={styles.container}>
      <ScrollView>
        {paginatedData.reverse().map((pageData, index) => (
          <LinearProgressChart
            data={pageData}
            week={pageData.length - (index + 1)}
            key={`${pageData[0]}`}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const LinearProgressChart = ({
  data,
  week,
}: {
  data: number[];
  week: number;
}) => {
  console.log({ data });
  const xAxisHeight = 20;
  const verticalContentInset = { top: 5, bottom: 5 };
  const horizontalContentInset = { left: 10, right: 10 };

  const yMax = [...data].sort((a, b) => a - b)[data.length - 1];
  // const yMax = data.length;

  const generateXAxisValues = (idx: number) => {
    return moment(idx).format('ddd');
  };

  return (
    <>
      <Text style={{ color: 'white', margin: 20 }}>{`Week ${week}`}</Text>
      <View style={styles.lineChartWrapper}>
        <YAxis
          data={data}
          style={{ width: 60 }}
          contentInset={verticalContentInset}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          formatLabel={(value) => `${value} points`}
          numberOfTicks={yMax}
          min={0}
          max={yMax}
        />

        <LineChart
          style={{ flex: 1 }}
          data={data}
          gridMin={0}
          svg={{ stroke: 'cornflowerblue' }}
          contentInset={{ ...verticalContentInset, ...horizontalContentInset }}
          numberOfTicks={yMax}
        >
          <Grid />
        </LineChart>
      </View>

      <View
        style={{
          padding: 5,
          borderWidth: 1,
          borderTopColor: 'gray',
          backgroundColor: 'transparent',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            left: 20,
            top: 7,
            color: 'white',
            fontSize: 10,
            height: xAxisHeight,
            position: 'absolute',
          }}
        >
          Day
        </Text>
        <XAxis
          style={{
            flex: 1,
            height: xAxisHeight,
            marginLeft: 60,
            paddingTop: 5,
          }}
          data={data}
          formatLabel={(value, index) => `${index + 1}`}
          svg={{ fontSize: 10, fill: 'grey' }}
          contentInset={horizontalContentInset}
          numberOfTicks={scoresPerPage}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // flexWrap: "nowrap",
  },
  lineChartWrapper: {
    backgroundColor: 'transparent',
    height: 600,
    // width: 400,
    paddingVertical: 16,
    flex: 1,
    flexDirection: 'row',
    // flexWrap: "nowrap",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
