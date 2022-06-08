import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";
// import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "SIGNAL",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerLeft: () => (
        <View style={styles.dp}>
          <TouchableOpacity onPress={() => logout()}>
            <Avatar
              rounded
              source={{
                uri: `https://avatars.dicebear.com/api/human/${Math.random()}.svg`,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.icons}>
          <TouchableOpacity>
            {" "}
            {/* <AntDesign name="camerao" size={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity>
            {" "}
            {/* <SimpleLineIcons name="pencil" size={24} />{" "} */}
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  const logout = () => {
    auth.signOut().then(function () {
      alert("Signed Out Successfully");
      navigation.replace("LOGIN");
      // Sign-out successful.
    });
  };
  return (
    <View>
      <Text>Hiii</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    marginRight: 30,
    justifyContent: "space-between",
    width: 70,
  },
  dp: {
    marginLeft: 30,
  },
});
