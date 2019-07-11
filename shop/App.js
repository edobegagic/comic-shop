import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Header from "./app/components/header";
import Banner from "./app/components/banner";
import Slika from "./app/components/slika";
import Head from "./app/components/head";
import Bottom from "./app/components/bottom";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Head />
        <Header />
        {/* <Banner /> */}
        <Slika />
        <Bottom />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E3"
  }
});
