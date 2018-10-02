import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { STRINGS, THEME } from "../constants";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{STRINGS.WELCOME_TO_LOGIN}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoginScreen;
