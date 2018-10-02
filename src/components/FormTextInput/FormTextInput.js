import React from "react";
import { TextInput } from "react-native";

import { THEME } from "../../constants";

import styles from "./styles";

const { DODGER_BLUE } = THEME;

const FormTextInput = ({ style, ...otherProps }) => (
  <TextInput
    selectionColor={DODGER_BLUE}
    style={[styles.textInput, style]}
    {...otherProps}
  />
);

export default FormTextInput;
