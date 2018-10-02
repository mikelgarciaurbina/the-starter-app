import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import { STRINGS, THEME } from "../constants";
import imageLogo from "../assets/images/logo.png";

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            placeholder={STRINGS.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            placeholder={STRINGS.PASSWORD_PLACEHOLDER}
          />
        </View>
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
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  }
});

export default LoginScreen;
