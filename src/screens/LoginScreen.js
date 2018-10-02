import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { STRINGS, THEME } from "../constants";
import imageLogo from "../assets/images/logo.png";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
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
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  }
});

export default LoginScreen;
