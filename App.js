import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Text, ThemeProvider } from "react-native-elements";
import StatusCard from "./StatusCard";

export default class App extends Component {
  state = {
    overallStatus: null,
    apps: [
      {
        name: "ShultzLab API",
        url: "https://api.shultzlab.com/",
        status: null
      },
      {
        name: "XKCD Cors API",
        url: "https://xkcd-cors-api.shultzlab.com/",
        status: null
      },
      {
        name: "Dino Facts API",
        url: "https://dinosaur-facts-api.shultzlab.com/",
        status: null
      },
      {
        name: "AAM POC API (DEV)",
        url: "https://aam-photos-api.shultzlab.com/api",
        status: null
      }
    ]
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    // Build cards
    let cards = [];
    for (let i = 0; i < this.state.apps.length; i++) {
      cards.push(
        <StatusCard
          key={i}
          title={this.state.apps[i].name}
          url={this.state.apps[i].url}
        />
      );
    }
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <Text h1>ShultzLab Status</Text>
        </View>
        {cards}
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
