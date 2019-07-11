import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require("../img/header.png")} style={styles.slika} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "steelblue",
    borderBottomWidth: 2
  },
  slika: {
    width: "100%",
    height: "100%"
  }
});
