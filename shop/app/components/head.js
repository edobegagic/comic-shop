import React from "react";
import { StyleSheet, View } from "react-native";

export default class Head extends React.Component {
  render() {
    return <View style={styles.head} />;
  }
}

const styles = StyleSheet.create({
  head: {
    height: 24,
    width: "100%",
    backgroundColor: "steelblue"
  }
});
