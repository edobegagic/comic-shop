import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import CustomImage from "./customImage";

export default class Slika extends React.Component {
  render() {
    return (
      <View style={styles.slikaContainer}>
        <View style={styles.col1}>
          <CustomImage
            imageSource={require("../img/gun.png")}
            header="    Batman    "
          />
        </View>
        <View style={styles.col2}>
          <CustomImage
            imageSource={require("../img/magneto.png")}
            header="The Avengers"
          />
        </View>
        <View style={styles.col3}>
          <CustomImage
            imageSource={require("../img/wolverine.png")}
            header="Wolverine"
            paragraph="mature content"
          />
        </View>
        <View style={styles.col1}>
          <CustomImage
            imageSource={require("../img/ww.png")}
            header="Wonder Woman"
          />
        </View>
        <View style={styles.col2}>
          <CustomImage
            imageSource={require("../img/action.png")}
            header="Action Comics"
          />
        </View>
        <View style={styles.col3}>
          <CustomImage
            header="BrandNew Stuff"
            paragraph="Lorem Ipsum"
            imageSource={require("../img/dcdaily.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slika: {
    width: "100%",
    height: "100%"
  },
  slikaContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  col1: {
    flex: 1,
    padding: 4,
    paddingTop: 8
  },
  col2: {
    flex: 1,
    padding: 4,
    paddingTop: 8
  },
  col3: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 4
  }
});
