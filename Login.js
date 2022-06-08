import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    auth.signInWithEmailAndPassword(email, password).then(function (response) {
      alert("Signed in Successfully");
      navigation.replace("HOME");
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        navigation.replace("HOME"); // User is signed in.
      }
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={{
            uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
          }}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <View style={styles.vessel}>
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChangeText={(result) => setEmail(result)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            type="password"
            value={password}
            onChangeText={(result) => setPassword(result)}
          />
        </View>
        <Button
          containerStyle={styles.button}
          title="LogIn"
          onPress={() => Login()}
        />
        <Button
          onPress={() => navigation.navigate("REGISTER")}
          containerStyle={styles.button}
          title="Register"
          type="outline"
        />
      </View>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vessel: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 10,
  },
});
