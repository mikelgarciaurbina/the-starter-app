import React, { Component } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { THEME } from "../constants";

class FormTextInput extends Component {
  render() {
    const { style, ...otherProps } = this.props;

    return (
      <TextInput
        selectionColor={THEME.DODGER_BLUE}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: THEME.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormTextInput;
