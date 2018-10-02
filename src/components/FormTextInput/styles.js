import { StyleSheet } from "react-native";

import { THEME } from "../../constants";

const { SILVER } = THEME;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default styles;
