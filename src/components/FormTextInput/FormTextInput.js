import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

import { THEME } from "../../constants";

import styles from "./styles";

const { DODGER_BLUE } = THEME;

class FormTextInput extends Component {
  textInputRef = React.createRef();

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  render() {
    const { error, style, ...otherProps } = this.props;

    return (
      <View style={[styles.container, style]}>
        <TextInput
          ref={this.textInputRef}
          selectionColor={DODGER_BLUE}
          style={[styles.textInput, style]}
          {...otherProps}
        />
        <Text style={styles.errorText}>{error || ""}</Text>
      </View>
    );
  }
}

export default FormTextInput;
