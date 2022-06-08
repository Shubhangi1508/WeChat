import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Home from "./Screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddChat from "./Screens/AddChat";

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2c6bed" },
  headerTitleStyle: { color: "white" },
  headerTitleAlign: "center",
  headerTintColor: "white",
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="REGISTER" component={Register} />
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="ADD A NEW USER" component={AddChat} />
        {/* <Register></Register> */}
        {/* <Login></Login> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
