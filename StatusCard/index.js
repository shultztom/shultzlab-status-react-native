import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, ThemeProvider } from "react-native-elements";
import { getStatusByUrl } from "../utils";
import { AntDesign } from "@expo/vector-icons";

export default class StatusCard extends Component {
  state = {
    status: null
  };
  async componentDidMount() {
    // First run
    let newStatus = await getStatusByUrl(this.props.url);
    this.setState(() => ({
      status: newStatus
    }));

    // Refesh every 10 seconds
    try {
      setInterval(async () => {
        this.setState(() => ({
          status: null
        }));
        let newStatus = await getStatusByUrl(this.props.url);
        this.setState(() => ({
          status: newStatus
        }));
      }, 10000);
    } catch (e) {
      this.setState(() => ({
        status: "ERROR"
      }));
      console.log(e);
    }
  }

  render() {
    let statusText;
    let statusIcon;
    if (this.state.status === null) {
      statusText = <Text>Loading...</Text>;
      statusIcon = <AntDesign name="questioncircleo" size={32} color="gray" />;
    } else if (this.state.status) {
      statusText = <Text>Up</Text>;
      statusIcon = <AntDesign name="checkcircleo" size={32} color="green" />;
    } else if (!this.state.status) {
      statusText = <Text>Down</Text>;
      statusIcon = <AntDesign name="closecircleo" size={32} color="red" />;
    } else {
      statusText = <Text>Unkown</Text>;
      statusIcon = <AntDesign name="questioncircleo" size={32} color="gray" />;
    }
    return (
      <ThemeProvider>
        <Card title={this.props.title}>
          <View style={styles.container}>
            {statusText}
            {statusIcon}
          </View>
        </Card>
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
