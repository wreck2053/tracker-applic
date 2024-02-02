import React, { useState } from "react";
import { View, PanResponder, Dimensions } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const sampleData = [30, 50, 100, 40, 60];

export default function BarGraph({
  data = sampleData,
  height = 0.5 * h,
  width = 0.5 * w,
  touchable = true,
}) {
  const n = data.length;
  const maxElement = Math.max(...data);
  const block = width / n;
  const barWidth = 0.8 * block;
  const spacing = 0.2 * block;

  const [selectedBar, setSelectedBar] = useState(null);
  const handleBarPress = (index) => {
    if (touchable) setSelectedBar(index);
  };
  const calculateHeight = (value) => (value / maxElement) * height;
  const totalWidth = n * (barWidth + spacing) - spacing;

  return (
    <View>
      <Svg height={height + barWidth / 2} width={totalWidth}>
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <Rect
              x={index * (barWidth + spacing)}
              y={height + barWidth / 2 - calculateHeight(value)}
              width={barWidth}
              height={calculateHeight(value)}
              fill={selectedBar === index ? "green" : "skyblue"}
              onPress={() => handleBarPress(index)}
            />
            <Circle
              cx={index * (barWidth + spacing) + barWidth / 2}
              cy={height + barWidth / 2 - calculateHeight(value)}
              r={barWidth / 2}
              fill={selectedBar === index ? "green" : "skyblue"}
              onPress={() => handleBarPress(index)}
            />
          </React.Fragment>
        ))}
      </Svg>
    </View>
  );
}
