import React, { Component } from "react";
import { Image, KeyboardAvoidingView, View } from "react-native";

import { Button, FormTextInput } from "../../components";
import { STRINGS } from "../../constants";
import imageLogo from "../../assets/images/logo.png";

import styles from "./styles";

const { EMAIL_PLACEHOLDER, LOGIN, PASSWORD_PLACEHOLDER } = STRINGS;

class LoginScreen extends Component {
  passwordInputRef = React.createRef();

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

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            placeholder={EMAIL_PLACEHOLDER}
            returnKeyType="next"
            value={this.state.email}
          />
          <FormTextInput
            onChangeText={this.handlePasswordChange}
            placeholder={PASSWORD_PLACEHOLDER}
            ref={this.passwordInputRef}
            returnKeyType="done"
            secureTextEntry={true}
            value={this.state.password}
          />
          <Button label={LOGIN} onPress={this.handleLoginPress} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
