import React from "react";
import { StyleSheet, View } from "react-native";

export default class Bottom extends React.Component {
  render() {
    return <View style={styles.bottom} />;
  }
}

const styles = StyleSheet.create({
  bottom: {
    height: 15,
    width: "100%",
    backgroundColor: "#FFF7E3",
    borderBottomColor: "steelblue",
    borderBottomWidth: 5
  }
});
