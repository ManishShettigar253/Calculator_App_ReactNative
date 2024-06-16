import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-web";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.welcome}>GenZ Calculator</Text>
      </View>
      <View style={styles.nameStyle}>
        <Text style={styles.textHead}>OUR TEAM</Text>

        <Text style={styles.textStyle}>Sanjana</Text>
        <Text style={styles.textStyle}>Deeksha</Text>
        <Text style={styles.textStyle}>Manish</Text>
        <Text style={styles.textStyle}>Praneeth</Text>
        <Text style={styles.textStyle}>Ashika</Text>

        <View style={styles.head}>
          <TouchableHighlight onPress={() => navigation.navigate("Calculator")}
      >
        <Text style={styles.welcome}>Get Started</Text>
      </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#E9967A",
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 20,
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFE4C4",
    alignItems: "center",
    justifyContent: "flex-start",
    border: 40,
    padding: 20,
    // marginTop:5,
    // margin:5,
    borderWidth: 3,
    borderRadius: 10,
  },
  welcome: {
    flex: 1,
    fontSize: 30,
  },
  nameStyle: {
    flex: 1,
    borderWidth: 3,
    fontSize: 20,
    width: "100%",
    height: 100,
    borderRadius: 30,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },

  textStyle: {
    fontSize: 30,
  },

  textHead: {
    fontSize: 40,
  },
});

export default HomeScreen;
