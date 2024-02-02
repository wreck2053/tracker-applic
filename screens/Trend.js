import React from "react";
import { ScrollView, StatusBar, View, Dimensions } from "react-native";
import BarGraph from "../components/BarGraph";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

export default function Trend() {
  const weekData = [6000, 8000, 12000, 11000, 7000, 9000, 4000];
  const monthData = Array.from(
    { length: 30 },
    () => Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000
  );

  return (
    <>
      <StatusBar />
      <ScrollView>
        {/* Steps / Calories / Distance / Active Time */}
        <View style={{ alignItems: "center", marginTop: 0.25 * h }}>
          <BarGraph data={monthData} height={0.5 * h} width={0.9 * w} />
        </View>
      </ScrollView>
    </>
  );
}
