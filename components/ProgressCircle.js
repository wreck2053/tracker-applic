import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function ProgressCircle({
  radius = 50,
  progress = 80,
  backgroundColor = "#e0e0e0",
  progressColor = "skyblue",
}) {
  const strokeWidthPercentage = 20;
  const strokeWidth = (strokeWidthPercentage / 100) * radius;
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const progressValue = (progress / 100) * circumference;

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        {/* Background Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressValue} ${circumference}`}
          strokeLinecap="butt"
          fill="transparent"
        />
      </Svg>
    </View>
  );
}
