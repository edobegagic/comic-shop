import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground
} from "react-native";
import Tekst from "./tekst";

export default class CustomImage extends React.Component {
  render() {
    return (
      <ImageBackground source={this.props.imageSource} style={styles.image}>
        <Tekst header={this.props.header} paragraph={this.props.paragraph} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  }
});
