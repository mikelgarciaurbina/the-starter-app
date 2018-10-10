import { StyleSheet } from "react-native";

import { THEME } from "../../constants";

const { SILVER, TORCH_RED } = THEME;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderColor: SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  errorText: {
    height: 20,
    color: TORCH_RED
  }
});

export default styles;
