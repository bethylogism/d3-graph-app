import * as React from "react";
import { ScrollView as OtherScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";

import { ScrollView } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <LinearGradient colors={["#282828", "#121212"]} style={styles.container}>
      <ScrollView>
        <LinearProgressChart />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
        <Text>This is changing</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const LinearProgressChart = () => {
  const data = [1, 4, 3, 2, 3, 6, 4, 5, 6, 7, 4, 8, 7, 9, 11, 9, 11, 14];
  const vericalContentInset = { top: 30, bottom: 10 };
  const horizontalContentInset = { left: 20, right: 10 };

  return (
    <>
      <View style={styles.lineChartWrapper}>
        <YAxis
          data={data}
          style={{ width: 60 }}
          contentInset={vericalContentInset}
          svg={{
            fill: "grey",
            fontSize: 10,
          }}
          formatLabel={(value) => `${value} points`}
        />
        <LineChart
          style={{ flex: 1 }}
          data={data}
          gridMin={1}
          svg={{ stroke: "cornflowerblue" }}
          contentInset={{ ...vericalContentInset, ...horizontalContentInset }}
        >
          <Grid />
        </LineChart>
      </View>

      <View style={{ backgroundColor: "transparent" }}>
        <Text style={{ paddingLeft: 20, color: "white" }}>Day</Text>
        <XAxis
          style={{
            flex: 1,
            height: 20,
            marginBottom: 20,
            marginLeft: 60,
          }}
          data={data}
          formatLabel={(value, index) => `${index + 1}`}
          svg={{ fontSize: 10, fill: "grey" }}
          contentInset={horizontalContentInset}
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
    backgroundColor: "transparent",
    height: 600,
    // width: 400,
    paddingVertical: 16,
    flex: 1,
    flexDirection: "row",
    // flexWrap: "nowrap",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
