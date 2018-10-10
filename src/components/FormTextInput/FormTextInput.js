import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

import { C, THEME } from "../../constants";

import styles from "./styles";

const { DODGER_BLUE, LIGHT_GRAY } = THEME;

class FormTextInput extends Component {
  textInputRef = React.createRef();

  state = {
    isFocused: false
  };

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  handleFocus = e => {
    this.setState({ isFocused: true });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  handleBlur = e => {
    this.setState({ isFocused: false });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  render() {
    const { error, onBlur, onFocus, style, ...otherProps } = this.props;
    const { isFocused } = this.state;

    return (
      <View style={[styles.container, style]}>
        <TextInput
          blurOnSubmit={C.IS_IOS}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          ref={this.textInputRef}
          selectionColor={DODGER_BLUE}
          style={[styles.textInput, style]}
          underlineColorAndroid={isFocused ? DODGER_BLUE : LIGHT_GRAY}
          {...otherProps}
        />
        <Text style={styles.errorText}>{error || ""}</Text>
      </View>
    );
  }
}

export default FormTextInput;
