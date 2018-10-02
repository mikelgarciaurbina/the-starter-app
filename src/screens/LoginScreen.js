import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import { STRINGS, THEME } from "../constants";
import imageLogo from "../assets/images/logo.png";

const { EMAIL_PLACEHOLDER, LOGIN, PASSWORD_PLACEHOLDER } = STRINGS;

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={PASSWORD_PLACEHOLDER}
          />
          <Button label={LOGIN} onPress={this.handleLoginPress} />
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
