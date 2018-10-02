import React, { Component } from "react";
import { TextInput } from "react-native";

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
    const { style, ...otherProps } = this.props;

    return (
      <TextInput
        ref={this.textInputRef}
        selectionColor={DODGER_BLUE}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}

export default FormTextInput;
