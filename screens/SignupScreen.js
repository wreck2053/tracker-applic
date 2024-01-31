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

export default function SignupScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

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
          source={require("../assets/images/signup.jpg")}
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
            secureTextEntry={!showPassword1}
            value={password1}
            onChangeText={(text) => setPassword1(text)}
          />

          <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)}>
            <Icon
              name={showPassword1 ? "eye-slash" : "eye"}
              size={20}
              color="#00000050"
              style={{ padding: 1 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.input}>
          <TextInput
            style={{ flex: 1, fontFamily: regular }}
            placeholder="Re-enter new password"
            secureTextEntry={!showPassword2}
            value={password2}
            onChangeText={(text) => setPassword2(text)}
          />

          <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)}>
            <Icon
              name={showPassword2 ? "eye-slash" : "eye"}
              size={20}
              color="#00000050"
              style={{ padding: 1 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            console.log("pwd1: " + password1 + "\tpwd2: " + password2);
            navigation.navigate("Dashboard");
          }}
        >
          <Text style={{ fontFamily: bold }}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.createAccount}>
          <Text style={{ fontFamily: regular }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupButton}>Log in</Text>
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
  image: { width: w, height: 0.5 * h, marginBottom: 75 },
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
