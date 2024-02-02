import React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import ProgressCircle from "../components/ProgressCircle";
import BarGraph from "../components/BarGraph";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const regular = "Montserrat_400Regular";
const bold = "Montserrat_700Bold";

export default function Dashboard() {
  const navigation = useNavigation();

  const weekData = [6000, 8000, 12000, 11000, 7000, 9000, 5000];
  const monthData = Array.from(
    { length: 30 },
    () => Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000
  );

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular: Montserrat_400Regular,
    Montserrat_700Bold: Montserrat_700Bold,
  });

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <>
      <StatusBar />
      <ScrollView style={styles.container}>
        {/* Greeting */}
        <View style={styles.greeting}>
          <View>
            <Text style={{ fontFamily: bold, fontSize: 24 }}>
              Hi, wreck2053!
            </Text>
            <Text style={{ fontFamily: regular, fontSize: 16 }}>
              Monday, 23 June
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Image
              source={require("../assets/images/rashford.jpg")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Cards */}
        <View style={styles.cardContainer}>
          {/* Left Pane */}
          <View>
            {/* Steps */}
            <TouchableOpacity
              onPress={() => console.log("Steps")}
              style={[styles.card, { height: 0.25 * h }]}
            >
              <View style={styles.cardTitle}>
                <Text style={{ fontFamily: bold, fontSize: 16 }}>STEPS</Text>
                <Icon name="walk" size={25} />
              </View>
              <View style={styles.circleContainer}>
                <ProgressCircle radius={0.09 * h} progress={45} />
              </View>
            </TouchableOpacity>

            {/* Maps */}
            <TouchableOpacity
              onPress={() => console.log("Maps")}
              style={[styles.card, { height: 0.3 * h }]}
            >
              <Text style={{ fontFamily: regular }}>Maps</Text>
            </TouchableOpacity>

            {/* Workouts */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.card, { height: 0.1 * h }]}
            >
              <Text style={{ fontFamily: regular }}>Workouts</Text>
            </TouchableOpacity>
          </View>
          {/* Right Pane */}
          <View>
            {/* Trend */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Trend")}
              style={[styles.card, { height: 0.3 * h }]}
            >
              <View style={styles.cardTitle}>
                <Text style={{ fontFamily: bold, fontSize: 16 }}>TREND</Text>
                <Icon name="stats-chart" size={25} />
              </View>
              <View style={styles.circleContainer}>
                <View pointerEvents="none">
                  <BarGraph
                    data={weekData}
                    height={0.2 * h}
                    width={0.4 * w}
                    touchable={false}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* Today's Activity */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.card, { height: 0.1 * h }]}
            >
              <Text style={{ fontFamily: regular }}>Today's Activity</Text>
            </TouchableOpacity>

            {/* Calories */}
            <TouchableOpacity
              onPress={() => console.log("Calories")}
              style={[styles.card, { height: 0.25 * h }]}
            >
              <View style={styles.cardTitle}>
                <Text style={{ fontFamily: bold, fontSize: 16 }}>CALORIES</Text>
                <Icon name="flame" size={25} />
              </View>
              <View style={styles.circleContainer}>
                <ProgressCircle radius={0.09 * h} progress={73} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Tab */}
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("StartActivity")}
            style={styles.bottomTab}
          >
            <Text style={{ fontFamily: regular, fontSize: 32 }}>
              START ACTIVITY
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0.02 * w,
    backgroundColor: "skyblue",
    backgroundColor: "#dddddd",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 0.02 * w,
    borderRadius: 20,
    backgroundColor: "transparent",
    marginTop: 0.05 * w,
    marginBottom: 0.05 * w,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 0.46 * w,
    padding: 0.02 * w,
    marginTop: 0.02 * w,
    marginBottom: 0.02 * w,
    alignItems: "center",
  },
  cardTitle: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  bottomTab: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    height: 0.1 * h,
    padding: 0.02 * w,
    marginTop: 0.04 * w,
    marginBottom: 0.1 * w,
    justifyContent: "center",
    alignItems: "center",
  },
});
