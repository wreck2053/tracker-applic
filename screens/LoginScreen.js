import React, { useState } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
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

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular: Montserrat_400Regular,
    Montserrat_700Bold: Montserrat_700Bold,
  });

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <StatusBar />
      <View style={styles.container}>
        <Image
          source={require("../assets/images/login.jpg")}
          style={styles.image}
        />

        <View style={styles.input}>
          <TextInput
            style={{ flex: 1, fontFamily: regular }}
            placeholder="Username or E-mail"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>

        <View style={styles.input}>
          <TextInput
            style={{ flex: 1, fontFamily: regular }}
            placeholder="Enter new password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "eye-slash" : "eye"}
              size={20}
              color="#00000050"
              style={{ padding: 1 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={
            () =>
              console.log("username: " + username + "\tpassword: " + password)
            // navigate to HomePage
          }
        >
          <Text style={{ fontFamily: bold }}>Login</Text>
        </TouchableOpacity>

        <View style={styles.createAccount}>
          <Text style={{ fontFamily: regular }}>Dont have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  input: {
    backgroundColor: "#00000025",
    width: 0.8 * w,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: { width: w, height: 0.5 * h, marginBottom: 100 },
  loginButton: {
    backgroundColor: "skyblue",
    width: 0.8 * w,
    borderRadius: 25,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  createAccount: {
    width: 0.8 * w,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  signupButton: {
    fontFamily: bold,
    color: "skyblue",
    marginLeft: 10,
  },
});

// done
