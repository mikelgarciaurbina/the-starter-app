import React, { Component } from "react";
import { Image, KeyboardAvoidingView, View } from "react-native";

import { Button, FormTextInput } from "../../components";
import { STRINGS } from "../../constants";
import imageLogo from "../../assets/images/logo.png";

import styles from "./styles";

const {
  EMAIL_REQUIRED,
  EMAIL_PLACEHOLDER,
  LOGIN,
  PASSWORD_REQUIRED,
  PASSWORD_PLACEHOLDER
} = STRINGS;

class LoginScreen extends Component {
  passwordInputRef = React.createRef();

  state = {
    email: "",
    password: "",
    emailTouched: false,
    passwordTouched: false
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    const { email, password, emailTouched, passwordTouched } = this.state;
    const emailError = !email && emailTouched ? EMAIL_REQUIRED : undefined;
    const passwordError =
      !password && passwordTouched ? PASSWORD_REQUIRED : undefined;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            autoCorrect={false}
            error={emailError}
            keyboardType="email-address"
            onBlur={this.handleEmailBlur}
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            placeholder={EMAIL_PLACEHOLDER}
            returnKeyType="next"
            value={email}
          />
          <FormTextInput
            error={passwordError}
            onBlur={this.handlePasswordBlur}
            onChangeText={this.handlePasswordChange}
            placeholder={PASSWORD_PLACEHOLDER}
            ref={this.passwordInputRef}
            returnKeyType="done"
            secureTextEntry={true}
            value={password}
          />
          <Button
            disabled={!email || !password}
            label={LOGIN}
            onPress={this.handleLoginPress}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
