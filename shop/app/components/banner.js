import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Tekst from "./tekst";

export default class Banner extends React.Component {
  render() {
    return <Image source={require("../img/dolnja.png")} style={styles.slika} />;
  }
}

const styles = StyleSheet.create({
  slika: {
    width: "100%",
    height: 180
  }
});
