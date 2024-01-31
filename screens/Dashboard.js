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
import Icon from "react-native-vector-icons/FontAwesome";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const regular = "Montserrat_400Regular";
const bold = "Montserrat_700Bold";

export default function Dashboard() {
  const navigation = useNavigation();

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
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.card, { height: 0.2 * h }]}
            >
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.card, { height: 0.3 * h }]}
            >
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.card, { height: 0.15 * h }]}
            >
              <Text></Text>
            </TouchableOpacity>
          </View>
          {/* Right Pane */}
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Trend")}
              style={[styles.card, { height: 0.3 * h }]}
            >
              <Text>TREND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.card, { height: 0.15 * h }]}
            >
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.card, { height: 0.2 * h }]}
            >
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Tab */}
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("StartActivity")}
            style={styles.bottomTab}
          >
            <Text style={{ fontFamily: bold, fontSize: 32 }}>
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
    // backgroundColor: "#f1f5f8",
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
  },
  bottomTab: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    height: 0.1 * h,
    padding: 0.02 * w,
    marginTop: 0.04 * w,
    marginBottom: 0.1 * w,
  },
});
