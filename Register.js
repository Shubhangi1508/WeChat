import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View, StyleSheet, Text } from "react-native";
import { Button, Input, makeStyles } from "react-native-elements";
import { auth } from "../firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgurl, setURL] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        response.user.updateProfile({
          displayName: name,
          photoURL: imgurl,
        });
        alert("REGISTRATION SUCCESSFULL");
      })
      .catch(function (error) {});
  };
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.vessel}>
          <Text style={styles.heading}>Create a Signal Account</Text>
          <Input
            placeholder="Full Name"
            type="text"
            value={name}
            onChangeText={(result) => setName(result)}
          />
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
          <Input
            placeholder="Profile Pic url (optional)"
            type="text"
            value={imgurl}
            onChangeText={(result) => setURL(result)}
          />
        </View>
        <Button
          containerStyle={styles.button}
          title="Register"
          onPress={() => register()}
        />
      </View>
    </>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontStyle: ["normal", "bold"],
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  vessel: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 20,
  },
});
